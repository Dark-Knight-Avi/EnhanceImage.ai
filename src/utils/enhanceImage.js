import axios from "axios";

const enhanceImage = async (image) => {
    try {
        const taskId = await uploadImage(image)
        const enhancedimageUrl = await pollForImage(taskId)
        return enhancedimageUrl
    } catch (error) {
        console.error("Error enhancing image:", error)
        throw new Error("Failed to enhance image")
    }
}

const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append('image_file', image)
    const {data} = await axios.post(`${process.env.PIC_WISH_BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "X-API-KEY": process.env.PIC_WISH_API_KEY,
        }
    })
    return data.data.task_id
}

const fetchImage = async (taskId) => {
    const {data} = await axios.get(`${process.env.PIC_WISH_BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": process.env.PIC_WISH_API_KEY,
        }
    })
    return data.data
}

const pollForImage = async (taskId, retries=0) => {
    const result = await fetchImage(taskId)
    if (result.state === 4) {
        if (retries > process.env.MAX_POLL_RETRIES) {
            throw new Error("Max retries reached")
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000))
        return pollForImage(taskId, retries + 1)
    }
    if (result.state === 1) {
        return result.image
    }
    throw new Error("Image processing failed")
}
export default enhanceImage
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import enhanceImage from '../utils/enhanceImage'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const uploadImageHandler = async (image) => {
        setUploadImage(URL.createObjectURL(image))
        setLoading(true)
        // call the API to enhance the image
        try {
            const enhancedUrl = await enhanceImage(image)
            setEnhancedImage(enhancedUrl)
            setLoading(false)
        } catch (error) {
            alert("Error: " + error.message)
            setError(error.message)
        }
    }

    
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler}/>
      <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage}/>
    </>
  )
}

export default Home

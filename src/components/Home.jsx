import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null)
    const [enhancedImage, setEnhancedImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const uploadImageHandler = (image) => {
        setUploadImage(URL.createObjectURL(image))
        setLoading(true)
        // call the API to enhance the image
        try {
            
        } catch (error) {
            
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

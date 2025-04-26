import { useState } from "react"

const ImageUpload = ({uploadImageHandler}) => {
    const [isDragging, setIsDragging] = useState(false)
    const showImageHandler = (e) => {
        const file = e.target.files[0]
        if (file) {
            uploadImageHandler(file)
        }
    }
  return (
    <div className='text-center bg-white shadow-lg rounded-2xl p-6 max-w-2xl'>
        <label 
            className={`block w-full cursor-pointer text-gray-700 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-all ${isDragging ? 'cursor-grabbing border-green-500 bg-blue-100' : ''}`}
            onDragEnter={(e) => {
                e.preventDefault()
                setIsDragging(true)
            }}
            onDragLeave={(e) => {
                e.preventDefault()
                setIsDragging(false)
            }}
            onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
            }}
            onDragEnd={(e) => {
                e.preventDefault()
                setIsDragging(false)
            }}
            onDrop={(e) => {
                e.preventDefault()
                const file = e.dataTransfer.files[0]
                if (file) {
                    uploadImageHandler(file)
                }
                setIsDragging(false)
            }}
        >
            <input type="file" name="fileInput" id="fileInput" className='hidden' onChange={showImageHandler}/>
            <span className='text-lg font-medium text-gray-600'>Upload or drag you image here!</span>
        </label>
    </div>
  )
}

export default ImageUpload

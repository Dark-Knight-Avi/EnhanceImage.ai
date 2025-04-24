const ImageUpload = () => {
  return (
    <div className='text-center bg-white shadow-lg rounded-2xl p-6 max-w-2xl'>
        <label className='block w-full cursor-pointer text-gray-700 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-all'>
            <input type="file" name="fileInput" id="fileInput" className='hidden'/>
            <span className='text-lg font-medium text-gray-600'>Upload or drag you image here!:</span>
        </label>
    </div>
  )
}

export default ImageUpload

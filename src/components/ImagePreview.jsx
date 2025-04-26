import Loading from "./Loading"

const ImagePreview = ({loading, uploaded, enhanced}) => {
  console.log("ImagePreview", {loading, uploaded, enhanced});
  
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>
            {uploaded && (<img src={uploaded} alt="" className="w-full h-full object-cover"/>)}
            {loading ? <Loading/> : (<div className="flex justify-center items-center bg-gray-200 h-full">No image selected!</div>)}
        </div>
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">Enhanced Image</h2>
            {loading && !enhanced ? <Loading /> : enhanced && !loading ? (<img src={enhanced} alt="" className="w-full h-full object-cover"/>) : (<div className="flex justify-center items-center bg-gray-200 min-h-80 h-full w-full">No image enhanced!</div>)}
            {enhanced && !loading && (<div className="flex justify-center items-center bg-gray-200 h-full w-full"><a href={enhanced} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download Enhanced Image</a></div>)}
        </div>
    </div>
  )
}

export default ImagePreview

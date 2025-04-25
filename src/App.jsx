import Home from "./components/Home"

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-5xl font-bold text-gray-800">AI Image Enhancer{" "}</h1>
          <p className="text-lg text-gray-500">Upload your image enhance with AI in seconds!</p>
        </div>
        <Home/>
        <div className="text-lg text-gray-500 mt-6">
          <p>Powered by @Aritra</p>
        </div>
      </div>
    </>
  )
}

export default App

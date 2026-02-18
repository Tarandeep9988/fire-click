import { IoIosClose } from "react-icons/io";

type Props = {
  cps: number,
  handleClose: () => void,
  handleRetake: () => void,
}

const ResultWindow = ({cps, handleClose, handleRetake}: Props) => {
  return (
    <div className="flex items-center justify-center bg-black/50 backdrop-blur-sm h-screen w-screen absolute top-0 left-0 z-10">
      <div className="bg-gray-800 border border-gray-700 h-80 w-120 rounded-2xl p-5 flex flex-col items-center relative text-gray-100">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold">Results</h2>
          <IoIosClose className="text-4xl cursor-pointer absolute right-2 top-2 hover:text-gray-400 transition-colors" onClick={handleClose}/>
        </div>
        <div className="grow flex justify-center items-center text-xl">
            Your clicking speed is <span className="text-purple-500 font-bold mx-2">{cps.toFixed(3)}</span> Clicks/s
        </div>
        <div>
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors py-2 px-6 rounded-xl cursor-pointer font-semibold" onClick={handleRetake}>
            Retake Test
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultWindow
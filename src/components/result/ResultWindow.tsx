import { IoIosClose } from "react-icons/io";

type Props = {
  cps: number,
  handleClose: () => void,
  handleRetake: () => void,
}

const ResultWindow = ({cps, handleClose, handleRetake}: Props) => {
  return (
    <div className="flex items-center justify-center bg-black/25 h-screen w-screen absolute top-0 left-0 z-1">
      <div className="bg-gray-800 h-80 w-120 rounded-2xl p-5 flex flex-col items-center relative">
        <div className="flex justify-center">
          <h2 className="text-4xl">Results</h2>
          <IoIosClose className="text-4xl cursor-pointer absolute right-0 top-0" onClick={handleClose}/>
        </div>
        <div className="grow flex justify-center items-center">
            Your clicking speed is {cps.toFixed(3)} Clicks/s
        </div>
        <div>
          <button className="bg-orange-400 py-2 px-4 rounded-xl cursor-pointer" onClick={handleRetake}>
            Retake Test
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultWindow
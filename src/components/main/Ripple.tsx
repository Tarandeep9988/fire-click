import React from 'react'

type Props = {
  x: number,
  y: number,
}

const Ripple = ({x, y}: Props) => {
  return (
    <span 
      className={`absolute h-1 w-1 bg-purple-500 rounded-full flex justify-center items-center animate-ripple -translate-x-1/2 -translate-y-1/2 ripple-animate shadow-lg shadow-purple-500/50`}
      style={{top: y, left: x}}
      >
    </span>
  )
}

export default Ripple
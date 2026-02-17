import React from 'react'

type Props = {
  id:number,
  x: number,
  y: number,
  onDone: () => void;
}

const Ripple = ({x, y, onDone}: Props) => {
  return (
    <span 
      className={`absolute h-1 w-1 bg-red-500 rounded-full flex justify-center items-center animate-ripple -translate-x-1/2 -translate-y-1/2 ripple-animate`}
      style={{top: y, left: x}}
      onAnimationEnd={onDone}
      >
    </span>
  )
}

export default Ripple
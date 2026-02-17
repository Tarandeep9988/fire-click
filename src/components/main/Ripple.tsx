import React from 'react'

type Props = {
  x: number,
  y: number,
}

const Ripple = ({x, y}: Props) => {
  return (
    <span 
      className={`absolute h-4 w-4 bg-red-500`}
      style={{top: y, left: x}}
      >
    </span>
  )
}

export default Ripple
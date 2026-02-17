import React, { useState } from 'react'
import Ripple from './Ripple';

type Props = {}

type Ripple = {
  x: number,
  y: number,
}

const ClickingArea = (props: Props) => {
  let rippleId = 0;
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('User Clicked on', e.clientX, e.clientY);
    console.log('Creating new ripple');
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple: Ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setRipples([...ripples, newRipple]);
    

  }
  return (
    <div className='relative flex justify-center items-center bg-black rounded-2xl h-full cursor-pointer overflow-hidden'
      onClick={handleClick}
      >
      {ripples.map((ripple) => (
        <Ripple key={++rippleId} x={ripple.x} y={ripple.y}/>
      ))}
      ClickingArea
    </div>
  )
}

export default ClickingArea
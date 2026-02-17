import React, { useState, useRef } from 'react'
import Ripple from './Ripple';

type Props = {}

type RippleType = {
  id: number,
  x: number,
  y: number,
}

const ClickingArea = (props: Props) => {
  const rippleIdRef = useRef(0);
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log('User Clicked on', e.clientX, e.clientY);
    // console.log('Creating new ripple');
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple: RippleType = {
      id: ++rippleIdRef.current,
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
        <Ripple 
          key={ripple.id} 
          id={ripple.id}
          x={ripple.x} 
          y={ripple.y} 
          onDone={() => setRipples(prev => prev.filter(r => r.id !== ripple.id))}
        />
      ))}
      ClickingArea
    </div>
  )
}

export default ClickingArea
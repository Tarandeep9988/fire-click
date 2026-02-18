import React, { useState, useRef } from 'react'
import Ripple from './Ripple';

type Props = {
  clickCntRef: React.RefObject<number>,
  setClickCnt: React.Dispatch<React.SetStateAction<number>>,
  startClickingTest: () => void,
}

type RippleType = {
  id: number,
  x: number,
  y: number,
}

const ClickingArea = ({clickCntRef, setClickCnt, startClickingTest}: Props) => {

  const [ripples, setRipples] = useState<RippleType[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

    if (clickCntRef.current === 0) {
      startClickingTest();
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple: RippleType = {
      id: ++clickCntRef.current,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    
    setClickCnt(clickCntRef.current);

    setRipples(prev => {
      const maxRipples = 5;
      const updated = [...prev, newRipple];
      // Keep only maxRipples
      return updated.slice(-1 * maxRipples);
    });
  }

  return (
    <div className='relative flex justify-center items-center bg-gray-800 border-2 border-purple-500/30 hover:border-purple-500/50 transition-colors rounded-2xl h-full cursor-pointer overflow-hidden text-gray-300'
      onClick={handleClick}
      >
      {ripples.map((ripple) => (
        <Ripple 
          key={ripple.id} 
          x={ripple.x} 
          y={ripple.y}
        />
      ))}
      Click
    </div>
  )
}

export default ClickingArea
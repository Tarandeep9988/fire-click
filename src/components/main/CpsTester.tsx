'use client'

import React, { useEffect, useRef, useState } from 'react'
import Capsules from './Capsules'
import ClickingArea from './ClickingArea'

type Props = {
  time?: number,
}

const CpsTester = ({time = 5}: Props) => {
  const clickCntRef = useRef<number>(0);
  const [clickCnt, setClickCnt] = useState<number>(0);
  const startingTimeRef = useRef<number>(-1);
  const currentTimeRef = useRef<number>(-1);
  const [seconds, setSeconds] = useState<number>(0);
  const [cps, setCps] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      if (startingTimeRef.current !== -1) {

        // Calculate and update time
        currentTimeRef.current = Date.now();
        const timeDiff = (currentTimeRef.current - startingTimeRef.current) / 1000;
        setSeconds(timeDiff); // convert to seconds

        // Calculate and update cps
        setCps(clickCntRef.current / timeDiff);
      }
    });
  
  }, [])
  

  const startClickingTest = () => {
    if (startingTimeRef.current === -1) {
      startingTimeRef.current = Date.now();
    }
  }


  return (
    <div className='bg-blue-50 h-100 w-150 p-4 flex flex-col'>
      <div className='flex justify-between w-full pb-5 gap-5'>
        <Capsules value={seconds.toFixed(3)} unit='Timer' />
        <Capsules value={cps.toFixed(3)} unit='Click/s' />
        <Capsules value={clickCnt.toString()} unit='Score' />
      </div>

      <div className='grow'>
        <ClickingArea clickCntRef={clickCntRef} setClickCnt={setClickCnt} startClickingTest={startClickingTest} />
      </div>
    </div>
  )
}

export default CpsTester
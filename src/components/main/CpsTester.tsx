'use client'

import React, { useEffect, useRef, useState } from 'react'
import Capsules from './Capsules'
import ClickingArea from './ClickingArea'
import ResultWindow from '../result/ResultWindow'

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

  const [toggleResultWindow, setToggleResultWindow] = useState(false);

  const showResult = () => {
    setToggleResultWindow(true);
  }

  const stopClickingTest = () => {
    // seconds might not be updated til now
    setSeconds(time);

    const cps = clickCntRef.current / time;
    console.log(cps);
    startingTimeRef.current = currentTimeRef.current = -1;

    showResult();
  }

  useEffect(() => {
    setInterval(() => {
      if (currentTimeRef.current !== -1) {

        // Calculate and update time
        currentTimeRef.current = Date.now();
        const timeDiff = (currentTimeRef.current - startingTimeRef.current) / 1000;

        if (timeDiff >= time) {
          stopClickingTest();
          return;
        }

        setSeconds(timeDiff); // convert to seconds

        // Calculate and update cps
        setCps(clickCntRef.current / timeDiff);
      }
    });
  
  }, [])
  

  const startClickingTest = () => {
    startingTimeRef.current = currentTimeRef.current = Date.now();
  }

  const resetTest = () => {
    startingTimeRef.current = currentTimeRef.current = -1;
    clickCntRef.current = 0;
    setClickCnt(0);
    setCps(0);
    setSeconds(0);
  }


  return (
    <div className='bg-gray-900 h-100 w-150 p-4 flex flex-col rounded-2xl'>
      {toggleResultWindow && <ResultWindow cps={cps} 
        handleClose={
          () => {
            setToggleResultWindow(false);
            resetTest();
          }
        }
        handleRetake={
          () => {
            setToggleResultWindow(false);
            resetTest();
          }
        }
      />}
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
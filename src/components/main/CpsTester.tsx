'use client'

import React, { useState } from 'react'
import Capsules from './Capsules'
import ClickingArea from './ClickingArea'

type Props = {
  time?: number,
}

const CpsTester = ({time = 5}: Props) => {
  const [clickCnt, setClickCnt] = useState(0);
  const startClickingTest = () => {
    
  }


  return (
    <div className='bg-blue-50 h-100 w-150 p-4 flex flex-col'>
      <div className='flex justify-between w-full pb-5'>
        <Capsules value={0} unit='Timer' />
        <Capsules value={0} unit='Click/s' />
        <Capsules value={clickCnt} unit='Score' />
      </div>

      <div className='grow'>
        <ClickingArea setClickCnt={setClickCnt} startClickingTest={startClickingTest} />
      </div>
    </div>
  )
}

export default CpsTester
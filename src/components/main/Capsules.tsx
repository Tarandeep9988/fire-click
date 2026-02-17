import React from 'react'

type Props = {
  value: number,
  unit: string,
}

const Capsules = ({value, unit}: Props) => {
  return (
    <div className='text-white bg-blue-400 rounded-2xl px-10 py-2 flex flex-col items-center'>
      <p>{value || "Test value"}</p>
      <p>{unit || "Test unit"}</p>
      </div>
  )
}

export default Capsules
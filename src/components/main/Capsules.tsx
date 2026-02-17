import React from 'react'

type Props = {
  value: string,
  unit: string,
}

const Capsules = ({value, unit}: Props) => {
  return (
    <div className='text-white bg-blue-400 rounded-2xl py-2 flex flex-col items-center grow'>
      <p>{value === null ? "Test value" : value}</p>
      <p>{unit || "Test unit"}</p>
      </div>
  )
}

export default Capsules
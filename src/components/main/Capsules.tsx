import React from 'react'

type Props = {
  value: string,
  unit: string,
}

const Capsules = ({value, unit}: Props) => {
  return (
    <div className='text-gray-100 bg-gray-800 border border-gray-700 rounded-2xl py-2 flex flex-col items-center grow'>
      <p className='text-xl font-semibold'>{value === null ? "0.000" : value}</p>
      <p className='text-sm text-gray-400'>{unit || "Unit"}</p>
      </div>
  )
}

export default Capsules
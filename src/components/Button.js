import React from 'react';

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 rounded-lg bg-gray-300 text-black font-medium text-sm'>{name}</button>
    </div>
  )
}

export default Button

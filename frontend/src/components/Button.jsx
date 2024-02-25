import React from 'react'

const Button = ({ onClick,text}) => {
  return (
    <button  onClick={onClick} className='hover:bg-accent-1  h-8 w-32 bg-bkg text-content rounded-2xl ml-4 border border-accent-1 hover:border-accent-2'>
      {text}
    </button>
  )
}

export default Button

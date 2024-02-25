import React from 'react';

const ButtonAccent2 = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className='mt-1 px-3 py-1 bg-accent-3  mr-2 text-gray-50 rounded-2xl  border border-accent-1 hover:border-accent-2 hover:bg-accent-3'
    >
      {text}
    </button>
  );
};

export default ButtonAccent2;

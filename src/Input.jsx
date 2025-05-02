import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { incrementByAmount } from './Data/counterSlice';

const Input = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('');
  return (
    <div>

        <input type="text" className='border-2 border-gray-300 rounded-md p-2' placeholder='Enter text here...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2'
        onClick={()=>dispatch(incrementByAmount(inputValue))}
        >Submit</button>
    </div>
  )
}

export default Input
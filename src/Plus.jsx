import React from 'react'

import { increment } from './Data/counterSlice';
import { useDispatch } from 'react-redux';


function Plus() {


  const dispatch = useDispatch()

  return (
    <div>
      <button className='px-10 rounded  bg-white ' onClick={()=>dispatch(increment())} >+</button>
    </div>
  )
}

export default Plus

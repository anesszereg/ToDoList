import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './Data/counterSlice'

function Minus() {


  const dispatch = useDispatch()




  return (
    <div>
       <button className=' px-10 rounded  bg-white   text-2xl'
        onClick={()=>dispatch(decrement())}
       >-</button>
    </div>
  )
}

export default Minus

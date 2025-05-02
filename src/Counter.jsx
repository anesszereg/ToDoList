import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {



const number = useSelector((state)=>state.counter.count)


  return (
    <div>{number }</div>
  )
}

export default Counter
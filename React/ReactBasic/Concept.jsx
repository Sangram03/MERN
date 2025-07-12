import React from 'react'
import { useState } from 'react'

const Concept = () => {
     
    useState
    // const [first, setfirst] = useState(second)
    // Used State components

    const [a,setA]= useState(10)


    const changeA = () => {
       console.log("chala gaya");
       setA(20)
       
    }

    // const a = 10;
  return (
    <div>
        <h1 className='text-4xl bg-pink'>Value of a is {10}</h1>
        <button onClick={changeA}>ChangeA</button>
    </div>
  )
}

export default Concept
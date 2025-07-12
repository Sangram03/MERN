import React from 'react'

const Concept2 = () => {

    const [num,setNum] = useState(0)


  return (
    <div>
        <h3>Number is {num}</h3>
        {/* <button onClick={function(){
            setNum(10)
        }}>Increment</button> */}


        <button onClick={()=> setNum(num+10)}>Increment</button>
        <button onClick={()=> setNum(num-10)}>Decrement</button>
    </div>
  )
}

export default Concept2
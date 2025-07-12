import React from 'react'

const App = () => {

   const a = 10;
   const user = "Sarthak"
   const age =200;

  //  function abc(){
  //   console.log("Hello");
    
  //  }
  //  abc()

   const abc =() => {
    console.log("Hello");
    
   }
   abc()

  return (
    <div>
      <h1 className='bg-red-400'>Hello</h1>
    <h2>hello{a}</h2>
    <h3>Hello {user}</h3>
    <h4>Hello {user} {age}</h4>
    <button onClick={abc()} >Change User</button>
    </div>
  )
}

export default App
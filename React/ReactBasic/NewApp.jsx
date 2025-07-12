import React from 'react'

const NewApp = () => {

    let user = "Sarthak";
    const name = "Aryan";

    const changeUser = ()=>{
        console.log(user);
        // react user ko change kardo
        user = "Sangram";
        console.log(user);
        
    }
  return (
    <div>
      <h2>My Name is{user}</h2>
      <h3>My developer Team {name}</h3>
      <button onClick={changeUser()}>Change Name</button>
    </div>
  )
}

export default NewApp
import React from 'react'
// import "./Navbar.css"

const Navbar = () => {
  return (
        <>
    
        <nav className= 'bg-green-700 flex  items-center justify-around'>
             <div className='text-2xl'>Sheryians</div>
            <div className='flex  items-center'>
                <h4 className='text-xl'>About</h4>
                <h4 className='text-xl'>Contact</h4>
                <h4 className='text-xl'>Services</h4>
                <h4 className='text-xl'>Your Account</h4>
            </div>
           </nav>

    {/* <nav>
      <div className="left">sangram's</div>
      <div className="right">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>service</li>
          <li>contact</li>
        </ul>
      </div>
    </nav> */}
    </>
  )
}

export default Navbar
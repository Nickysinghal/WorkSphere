import React from 'react'

const Header = ({ data }) => {
  console.log("headeer", { data })
  const Logout = () => {
     localStorage.setItem("loggedInUser", null);
     window.location.reload() 
    }


  return (

    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='ext-3xl font-semibold'>{data.firstName}</span></h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-sm' onClick={Logout}>Log out</button>
    </div>
  )
}

export default Header

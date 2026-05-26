import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({data,changeUser}) => {
  return (
    <div className='bg-black min-h-screen p-3'>
      <Header data={data} changeUser={changeUser}/>
      <CreateTask/>
      <AllTask/>
      
    </div>
  )
}

export default AdminDashboard

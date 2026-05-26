import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  authData.employees.map((emp,idx) => {console.log(emp.id)})

  return (
    <div className='h-80 bg-black rounded p-2'>
      <div className='bg-blue-400/50 flex justify-between p-3 rounded mt-2 mb-3 text-white'>
          <h2 className='text-lg font-meduim w-1/5'>Employee Name</h2>
          <h3 className='text-lg font-meduim w-1/5'>Active task</h3>
          <h3 className='text-lg font-meduim w-1/5'>New Task</h3>
          <h3 className='text-lg font-meduim w-1/5'>Completed Task</h3>
          <h3 className='text-lg font-meduim w-1/5'>Failed Task</h3>
      </div>

      <div className='h-[80%] overflow-auto'>
        {authData.employees.map(function(emp,idx){
        
        return <div className='bg-black flex justify-between p-3 rounded mt-2 border-2 border-white' key={idx}>
          <h2 className='text-lg font-meduim w-1/5 text-white'>{emp.firstName}</h2>
          <h3 className='text-lg font-meduim w-1/5 text-blue-400'>{emp.taskCounts.active}</h3>
          <h3 className='text-lg font-meduim w-1/5 text-yellow-200'>{emp.taskCounts.newTask}</h3>
          <h3 className='text-lg font-meduim w-1/5 text-green-200'>{emp.taskCounts.completed}</h3>
          <h3 className='text-lg font-meduim w-1/5 text-red-600'>{emp.taskCounts.failed}</h3>
        </div>
       })
      }
        
      </div>
      

    </div>
  )
}

export default AllTask

import React from 'react'

const CreateTask = () => {
  return (
<div>
        <form >
          <h3>Task title</h3>
          <input type="text" placeholder='title : Make a UI design' className='text-white bg-gray-700 border-white p-2'  />
          <h3>Description</h3>
          <textarea name="" id="" col="30" row="10" className='text-white bg-gray-700 border-white p-2'></textarea>
          <h3>Date</h3>
          <input type="date" className='text-white bg-gray-700 border-white p-2'/>
          <h3>Assigned to</h3>
          <input type="text" name="" id="" placeholder='employee name' className='text-white bg-gray-700 border-white p-2 m-3'/>
          <h3>Category</h3>
          <input type="text" placeholder='design, dev etc' className='text-white bg-gray-700 border-white p-2 m-3'/>
          <button>Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask

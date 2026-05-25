import React from 'react'

const TaskListNumber = ({data}) => {
    return (
        <div className='flex mt-5 justify-between gap-5 screen'>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-yellow-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Active task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed task</h3>
            </div>
            <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed task</h3>
            </div>

        </div>
    )
}

export default TaskListNumber

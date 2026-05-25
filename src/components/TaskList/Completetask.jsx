import React from 'react'

const Completetask = ({data}) => {
    return (
        <div className="h-full w-75 shrink-0 rounded-xl bg-blue-400 p-5 text-amber-50">
            <div className="flex items-center justify-between">
                <h3 className="rounded bg-red-500 px-3 py-1 text-sm">{data.category}</h3>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="mt-2 text-sm">
               {data.taskDescription}
            </p>
            <div className="bg-green-300 mt-2">
                <button className='w-full'>Complete</button>
            </div>
        </div>
    )
}

export default Completetask

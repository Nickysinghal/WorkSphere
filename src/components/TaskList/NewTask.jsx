import React from 'react'

const NewTask = () => {
    return (
        <div className="h-full w-75 shrink-0 rounded-xl bg-blue-400 p-5 text-amber-50">
            <div className="flex items-center justify-between">
                <h3 className="rounded bg-red-500 px-3 py-1 text-sm">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make youtbe video</h2>
            <p className="mt-2 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumendaacacasaxax
                placeat quaerat deleniti?
            </p>
             <div className="flex justify-between mt-4">
                <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask

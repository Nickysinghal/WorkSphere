import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className="h-full w-72 shrink-0 rounded-2xl bg-green-400/10 border border-green-400/40 p-5 text-white flex flex-col justify-between backdrop-blur-sm">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-green-400/20 border border-green-400/50 px-3 py-1 text-xs font-medium text-green-300 uppercase tracking-wider">
                        {data.category}
                    </span>
                    <span className="text-xs text-green-400/70">{data.taskDate}</span>
                </div>
                <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-green-400">● New Task</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 leading-snug">{data.taskTitle}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{data.taskDescription}</p>
            </div>
            <button className='mt-5 w-full rounded-xl bg-green-400/20 hover:bg-green-400/30 border border-green-400/40 text-green-300 text-sm font-semibold py-2 transition-all duration-200'>
                Accept Task
            </button>
        </div>
    )
}

export default NewTask

import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className="h-full w-75 shrink-0 rounded-2xl bg-yellow-400/10 border border-yellow-400/40 p-5 text-amber-50 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-yellow-400/20 border border-yellow-400/50 px-3 py-1 text-sm">{data.category}</span>
                    <span className="text-sm text-yellow-400/70">{data.taskDate}</span>
                </div>
                 <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400">&#9679; Active</span>
                </div>
               <h2 className="text-lg font-bold text-white mb-2 leading-snug">{data.taskTitle}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{data.taskDescription}</p>
            </div>
            <div className="flex gap-2 mt-5">
                <button className='flex-1 rounded-xl bg-green-400/20 hover:bg-green-400/30 border border-green-400/40 text-green-300 text-xs font-semibold py-2 transition-all duration-200'>Mark As Completed</button>
                <button className='flex-1 rounded-xl bg-red-400/20 hover:bg-red-400/30 border border-red-400/40 text-red-300 text-xs font-semibold py-2 transition-all duration-200'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask

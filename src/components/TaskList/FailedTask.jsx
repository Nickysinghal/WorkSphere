import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className="h-full w-72 shrink-0 rounded-2xl bg-red-400/10 border border-red-400/40 p-5 text-white flex flex-col justify-between backdrop-blur-sm">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-red-400/20 border border-red-400/50 px-3 py-1 text-xs font-medium text-red-300 uppercase tracking-wider">
                        {data.category}
                    </span>
                    <span className="text-xs text-red-400/70">{data.taskDate}</span>
                </div>
                <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-red-400">X Failed</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2 leading-snug">{data.taskTitle}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{data.taskDescription}</p>
            </div>
            <div className="mt-5 w-full rounded-xl bg-red-400/20 border border-red-400/40 text-red-300 text-sm font-semibold py-2 text-center">
                Failed X
            </div>
        </div>
    )
}

export default FailedTask

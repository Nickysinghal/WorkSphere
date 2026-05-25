import React from 'react'

const CreateTask = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white/5 rounded-lg shadow-md">
      <form className="grid grid-cols-1 gap-4">
        <h2 className="text-xl font-semibold text-white">Create Task</h2>

        <label className="text-sm text-gray-200">Task title</label>
        <input
          type="text"
          placeholder="e.g. Make a UI design"
          className="w-full text-white bg-gray-700/60 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label className="text-sm text-gray-200">Description</label>
        <textarea
          cols={30}
          rows={5}
          className="w-full text-white bg-gray-700/60 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-200">Date</label>
            <input
              type="date"
              className="w-full text-white bg-gray-700/60 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-200">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full text-white bg-gray-700/60 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <label className="text-sm text-gray-200">Assigned to</label>
        <input
          type="text"
          placeholder="employee name"
          className="w-full text-white bg-gray-700/60 border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask

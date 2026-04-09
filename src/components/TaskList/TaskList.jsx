import React from "react";

function TaskList() {
  return (
    <div
      id="tasklist"
      className="mt-5 flex h-[55%] w-full flex-nowrap items-center justify-start gap-5 overflow-x-auto py-5"
    >
      <div className="h-full w-75 shrink-0 rounded-xl bg-red-400 p-5 text-amber-50">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-red-500 px-3 py-1 text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make youtbe video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumendaacacasaxax
          placeat quaerat deleniti?
        </p>
      </div>

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
      </div>

      <div className="h-full w-75 shrink-0 rounded-xl bg-yellow-400 p-5 text-amber-50">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-red-500 px-3 py-1 text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make youtbe video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumendaacacasaxax
          placeat quaerat deleniti?
        </p>
      </div>

      <div className="h-full w-75 shrink-0 rounded-xl bg-green-400 p-5 text-amber-50">
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-red-500 px-3 py-1 text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make youtbe video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumendaacacasaxax
          placeat quaerat deleniti?
        </p>
      </div>
    </div>
  );
}

export default TaskList;

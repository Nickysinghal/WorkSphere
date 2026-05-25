import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Completetask from "./Completetask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  console.log("taskkklisttt", data.tasks)
  return (
    <div
      // id="tasklist"
      className="mt-5 flex h-[55%] w-full flex-nowrap items-center justify-start gap-5 overflow-x-auto py-5"
    >
      {data.tasks.map((task,idx) => {
        if (task.active) {
          return <AcceptTask key={idx} />
        }
        if (task.newTask) {
          return <NewTask key={idx}/>
        }
        if (task.completed) {
          return <Completetask key={idx}/>
        }
        if (task.failed) {
          return <FailedTask key={idx}/>
        }
      })}


    </div>
  );
}

export default TaskList;

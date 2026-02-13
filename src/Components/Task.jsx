import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
      {props.task.map((task_item) => (
        <li key={task_item.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task_item.id)}
            className={`bg-slate-400 w-full text-left  p-2 rounded-md hover:cursor-pointer hover:bg-slate-800 hover: ease-in-out hover: duration-200 ${task_item.isCompleted ? "line-through text-green-400" : "text-white"}`}
          >
            {task_item.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white hover:cursor-pointer hover:bg-slate-800 hover: ease-in-out hover: duration-300">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.deleteTaskClick(task_item.id)}
            className="bg-slate-400 p-2 rounded-md text-white hover:cursor-pointer hover:bg-slate-800 hover: ease-in-out hover: duration-300"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

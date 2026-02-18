import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({ task, deleteTaskClick, onTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task_i) {
    const query = new URLSearchParams();
    query.set("title", task_i.title);
    query.set("description", task_i.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
      {task.map((task_item) => (
        <li key={task_item.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task_item.id)}
            className={`bg-slate-400 w-full text-left  p-2 rounded-md hover:cursor-pointer hover:bg-slate-800 hover: ease-in-out hover: duration-200 ${task_item.isCompleted ? "line-through text-green-600" : "text-white"}`}
          >
            {task_item.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task_item)}
            className="bg-slate-400 p-2 rounded-md text-white hover:cursor-pointer hover:bg-slate-800 hover: ease-in-out hover: duration-300"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => deleteTaskClick(task_item.id)}
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

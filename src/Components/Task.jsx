import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
      {props.task.map((task_item) => (
        <li key={task_item.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task_item.id)}
            className="bg-slate-400 w-full text-left text-white p-2 rounded-md"
          >
            {task_item.title}
            {task_item.isCompleted ? "Complete" : "Incomplete"}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

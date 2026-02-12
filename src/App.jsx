import { useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Task";

function App() {
  const [tasks_list, setTask] = useState([
    {
      id: 1,
      title: "Estudar",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Trabalhar",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks_list.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTask(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px]">
        <h1 className="text-2xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks task={tasks_list} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;

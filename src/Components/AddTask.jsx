import { SettingsIcon } from "lucide-react";
import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState([]);

  return (
    <div className="bg-slate-200 space-y-4 rounded-md shadow p-6 flex flex-col">
      <input
        type="text"
        placeholder="Digite um titulo de tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-slate-300 bg-white outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite a descrição da tarefa"
        className="border-slate-300 bg-white outline-slate-400 px-4 py-2 rounded-md"
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            const alerts = ["Os campos não podem estar em branco", "AA"];
            setAlert(alerts);
            return;
          }

          props.onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 hover:bg-slate-700 hover: ease-in-out duration-200 hover: cursor-pointer"
      >
        Adicionar
      </button>
      <ul>
        {alert.map((element, index) => (
          <p className="text-red-400 font-bold" key={index}>
            {element}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default AddTask;

import { useSearchParams } from "react-router";

function TaskPage() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-125 flex flex-col gap-3">
        <h1 className="text-2xl text-slate-100 font-bold text-center m-5">
          Detalhes da Tarefa
        </h1>
        <div className="bg-slate-200 space-y-4 rounded-md shadow p-6 flex flex-col justify-center text-center">
          <h2 className="font-bold text-3xl text-slate-700">{title}</h2>
          <p className="text-1xl text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

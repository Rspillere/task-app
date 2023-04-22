import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { toast } from "react-hot-toast";

const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();
  return (
    <div className="bg-gray-700 hover:bg-slate-500 px-20 py-5 m-2">
      <div className="flex justify-between">
        <h1
          className="font-bold text-lg cursor-pointer"
          onClick={() => router.push(`/edit/${task.id}`)}
        >
          {task.title}
        </h1>
        <button
        className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex"
          onClick={() => {
            const accept = window.confirm("are you sure");
            if (accept) {
              deleteTask(task.id);
              toast.success("tarea borrada exitosamente");
            }
          }}
        >
          Delete
        </button>
      </div>
      <p>{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  );
};

export default TaskCard;

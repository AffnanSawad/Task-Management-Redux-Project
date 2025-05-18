import { useAppSelector } from "@/hooks/hooks";
import TaskCard from "../TaskCard";
import AddTask from "../AddTask";


const TasksPage = () => {
 

    const tasks = useAppSelector( (state)=> state.tasks.task )
  
    console.log(tasks)


    return (
          <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Tasks</h1>
   
    <h1 className="my-5"> <AddTask></AddTask> </h1>


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard  key={task.id} task={task} />
        ))}
      </div>
    </div>
    );
};

export default TasksPage;
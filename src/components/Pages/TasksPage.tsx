import { useAppSelector } from "@/hooks/hooks";
import TaskCard from "../TaskCard";
import AddTask from "../AddTask";

// Reuse Task type (same as in TaskCard)
interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}

// Priority literals
const allowedPriorities = ["High", "Medium", "Low"] as const;
type Priority = typeof allowedPriorities[number];

// Type guard to validate priority
const isValidPriority = (value: string): value is Priority => {
  return allowedPriorities.includes(value as Priority);
};

const TasksPage = () => {
  const tasks = useAppSelector((state) => state.tasks.task);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Tasks</h1>

      <div className="my-5">
        <AddTask />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => {
          const normalizedPriority: Priority = isValidPriority(task.priority)
            ? task.priority
            : "Low"; // fallback

          const typedTask: Task = {
            ...task,
            priority: normalizedPriority,
          };

          return <TaskCard key={task.id} task={typedTask} />;
        })}
      </div>
    </div>
  );
};

export default TasksPage;

import { useState } from "react";
import { deleteTask, completeTask } from "@/Redux/Features/Task/taskSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

// Define Task type
interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useDispatch();

  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [submitNotes, setSubmitNotes] = useState("");

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleMarkAsSubmitClick = () => {
    setShowSubmitForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(completeTask(task.id));
    setShowSubmitForm(false);
    setSubmitNotes("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`max-w-md w-full rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out
        ${task.isCompleted ? "bg-green-50" : "bg-gradient-to-br from-white via-slate-50 to-slate-100"}`}
    >
      {/* Top */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-1 ${task.isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>
            {task.title}
          </h3>
          <p className={`text-sm ${task.isCompleted ? "line-through text-gray-400" : "text-gray-600"}`}>
            {task.description}
          </p>
        </div>

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 text-xl font-extrabold ml-4"
          title="Delete task"
        >
          &times;
        </button>
      </div>

      {/* Bottom info */}
      <div className="mt-5 flex justify-between items-center text-sm text-gray-500">
        <span className="italic">📅 Due: {task.dueDate}</span>
        <span className={`font-bold px-2 py-1 rounded-full
          ${task.priority === "High" ? "bg-red-100 text-red-600" :
            task.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
            "bg-green-100 text-green-600"}`}>
          {task.priority} Priority
        </span>
      </div>

      {/* Submit form or button */}
      <div className="mt-4">
        {task.isCompleted ? (
          <button
            disabled
            className="w-full py-2 rounded-md font-semibold bg-gray-400 text-white cursor-not-allowed"
          >
            Completed
          </button>
        ) : showSubmitForm ? (
          <form onSubmit={handleSubmit} className="space-y-2">
            <textarea
              required
              placeholder="Add submission notes..."
              value={submitNotes}
              onChange={(e) => setSubmitNotes(e.target.value)}
              className="w-full border text-black border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowSubmitForm(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-cyan-600 text-white hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleMarkAsSubmitClick}
            className="w-full py-2 rounded-md font-semibold bg-pink-400 text-white hover:bg-pink-700"
          >
            Mark as Submit
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TaskCard;

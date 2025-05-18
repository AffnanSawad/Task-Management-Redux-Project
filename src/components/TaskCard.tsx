

const TaskCard = ({task}) => {
    return (
   <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
  <div className="flex justify-between items-start">
    {/* Checkbox */}
    <input
      type="checkbox"
      className="w-5 h-5 text-blue-600 border-gray-300 rounded mt-1"
      aria-label={`Select ${task.title}`}
    />

    {/* Title */}
    <h3 className="flex-1 ml-3 text-xl font-semibold text-gray-900">
      {task.title}
    </h3>

    {/* Delete button */}
    <button
      className="text-red-500 hover:text-red-700 text-2xl font-bold ml-2"
      aria-label="Delete task"
    >
      &times;
    </button>
  </div>

  {/* Description */}
  <p className="mt-3 text-gray-700">{task.description}</p>

  {/* Footer with Due Date and Priority */}
  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
    <span>Due: {task.dueDate}</span>
    <span className="font-semibold">
      Priority: <span className={`text-${task.priority === "High" ? "red" : task.priority === "Medium" ? "yellow" : "green"}-600`}>
        {task.priority}
      </span>
    </span>
  </div>
</div>


    );
};

export default TaskCard;

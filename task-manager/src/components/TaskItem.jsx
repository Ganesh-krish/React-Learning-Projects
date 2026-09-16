function TaskItem({
    task,
    deleteTask,
    toggleTask,
    onEdit
}) {

    return (
        <div>

            <h3>{task.title}</h3>

            <p>Category: {task.category}</p>

            <p>Priority: {task.priority}</p>

            <p>
                Due Date: {task.dueDate || "No due date"}
            </p>

            <p>
                Status: {
                    task.completed
                        ? "Completed"
                        : "Active"
                }
            </p>

            <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => onEdit(task)}>
                Edit
            </button>

            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>

        </div>
    );
}

export default TaskItem;
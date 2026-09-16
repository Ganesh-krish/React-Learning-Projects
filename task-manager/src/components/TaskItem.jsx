function TaskItem({
    task,
    deleteTask,
    toggleTask,
    onEdit
}) {

    return (
        <article className={`task-card ${task.completed ? "completed" : ""}`}>

            <div className="task-content">

                <div className="task-header">

                    <h3>{task.title}</h3>

                    <span className={`priority ${task.priority.toLowerCase()}`}>
                        {task.priority}
                    </span>

                </div>

                <div className="task-details">

                    <span>{task.category}</span>

                    <span>
                        {task.dueDate
                            ? `Due: ${task.dueDate}`
                            : "No due date"}
                    </span>

                    <span>
                        {task.completed ? "Completed" : "Active"}
                    </span>

                </div>

            </div>

            <div className="task-actions">

                <button
                    onClick={() => toggleTask(task.id)}
                    className="complete-btn"
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    onClick={() => onEdit(task)}
                    className="edit-btn"
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteTask(task.id)}
                    className="delete-btn"
                >
                    Delete
                </button>

            </div>

        </article>
    );
}

export default TaskItem;
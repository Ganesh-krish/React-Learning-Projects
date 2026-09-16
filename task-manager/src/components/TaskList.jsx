import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    deleteTask,
    toggleTask,
    onEdit
}) {

    return (
        <section>

            <h2>Tasks</h2>

            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    onEdit={onEdit}
                />
            ))}

        </section>
    );
}

export default TaskList;
function TaskList({tasks,deleteTask,toggleTask}) {
    return (
        <section>
            <h2>Tasks</h2>

            {/* <p>{tasks[0].title}.</p> */}

            {tasks.map( task =>{
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Priority : {task.priority}</p>
                    <p>Status: {task.completed ? "Completed" : "Active"}</p>
                    <button onClick={() => toggleTask(task.id)}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>
                    <button onClick={() => deleteTask(task.id)}>
                        Delete
                    </button>
                </div>
            })}
        </section>
    );
}

export default TaskList;
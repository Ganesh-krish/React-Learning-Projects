function TaskList({tasks}) {
    return (
        <section>
            <h2>Tasks</h2>

            {/* <p>{tasks[0].title}.</p> */}

            {tasks.map( task =>{
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Priority : {task.priority}</p>
                </div>
            })}
        </section>
    );
}

export default TaskList;
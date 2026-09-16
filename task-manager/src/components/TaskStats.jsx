function TaskStats({
    totalTasks,
    activeTasks,
    completedTasks,
    highPriorityTasks
}) {

    return (
        <section className="stats">

            <div className="stat-card">
                <span>Total</span>
                <strong>{totalTasks}</strong>
            </div>

            <div className="stat-card">
                <span>Active</span>
                <strong>{activeTasks}</strong>
            </div>

            <div className="stat-card">
                <span>Completed</span>
                <strong>{completedTasks}</strong>
            </div>

            <div className="stat-card">
                <span>High Priority</span>
                <strong>{highPriorityTasks}</strong>
            </div>

        </section>
    );
}

export default TaskStats;
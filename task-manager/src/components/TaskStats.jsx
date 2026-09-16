function TaskStats({
    totalTasks,
    activeTasks,
    completedTasks,
    highPriorityTasks
}) {

    return (
        <section>

            <h2>Task Statistics</h2>

            <p>Total Tasks: {totalTasks}</p>

            <p>Active: {activeTasks}</p>

            <p>Completed: {completedTasks}</p>

            <p>High Priority: {highPriorityTasks}</p>

        </section>
    );
}

export default TaskStats;
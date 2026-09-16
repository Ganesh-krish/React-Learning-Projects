function TaskForm() {
    return (
        <section>
            <h2>Add Task</h2>
            <form>
                <input
                    type="text"
                    placeholder="Enter task"
                />

                <button type="submit">
                    Add Task
                </button>
            </form>
        </section>
    );
}

export default TaskForm;
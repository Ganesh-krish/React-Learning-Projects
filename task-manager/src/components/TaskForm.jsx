import {useState} from "react";

function TaskForm({addTask}) {
    
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            priority: "Medium",
            completed: false
        };

        addTask(newTask);

        setTitle("");
    }
    return (
        <section>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value ={title}
                    onChange ={ (e)=>setTitle(e.target.value)}
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
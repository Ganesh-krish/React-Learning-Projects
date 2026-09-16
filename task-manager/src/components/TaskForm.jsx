import { useState,useEffect } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {

    const [formData, setFormData] = useState({
        title: "",
        category: "Learning",
        priority: "Medium",
        dueDate: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    useEffect(() => {

        if (editingTask) {
            setFormData({
                title: editingTask.title,
                category: editingTask.category,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate
            });
        }

    }, [editingTask]);

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.title.trim()) {
            return;
        }

        if (editingTask) {

            const updatedTask = {
                ...editingTask,
                title: formData.title.trim(),
                category: formData.category,
                priority: formData.priority,
                dueDate: formData.dueDate
            };

            updateTask(updatedTask);

        } else {

            const newTask = {
                id: Date.now(),
                title: formData.title.trim(),
                category: formData.category,
                priority: formData.priority,
                dueDate: formData.dueDate,
                completed: false
            };

            addTask(newTask);

        }

        setFormData({
            title: "",
            category: "Learning",
            priority: "Medium",
            dueDate: ""
        });
    }

    return (
        <section>
            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter task"
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="Learning">Learning</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>

                <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                />

                <button type="submit">
                    {editingTask ? "Update Task" : "Add Task"}
                </button>

            </form>
        </section>
    );
}

export default TaskForm;
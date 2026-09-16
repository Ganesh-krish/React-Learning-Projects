import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import {useState} from "react";

function App() {

  const [tasks,setTasks] = useState([
      {
        id: 1,
        title: "Learn React",
        priority: "High",
        completed: false
    }
  ]);

    function addTask(task) {
        setTasks(prevTasks => [...prevTasks, task]);
    }

    function deleteTask(id) {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        );
    }

    function toggleTask(id) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }
    return (
        <div>
            <Header />

            <main>
                <TaskForm addTask={addTask} />

                <FilterBar />

                <TaskList 
                  tasks={tasks} 
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                />
            </main>
        </div>
    );
}

export default App;
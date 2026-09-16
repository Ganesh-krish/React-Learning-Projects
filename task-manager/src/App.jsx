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

    return (
        <div>
            <Header />

            <main>
                <TaskForm addTask={addTask} />

                <FilterBar />

                <TaskList tasks={tasks} />
            </main>
        </div>
    );
}

export default App;
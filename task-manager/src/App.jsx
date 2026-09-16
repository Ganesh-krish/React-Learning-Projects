import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import {useState,useEffect} from "react";
import "./App.css";
function App() {

  
  const [tasks, setTasks] = useState(() => {
  
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
            ? JSON.parse(savedTasks)
            : [];
  });

  const [editingTask, setEditingTask] = useState(null);

  function startEditTask(task) {
    setEditingTask(task);
  }

  function updateTask(updatedTask) {

      setTasks(prevTasks =>
          prevTasks.map(task =>
              task.id === updatedTask.id
                  ? updatedTask
                  : task
          )
      );

      setEditingTask(null);
  }

  const [filters, setFilters] = useState({
      search: "",
      category: "All",
      priority: "All",
      status: "All"
  });

  useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );
  }, [tasks]);

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

    function handleFilterChange(e) {
        const { name, value } = e.target;

        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function cancelEdit() {
        setEditingTask(null);
    }
    const filteredTasks = tasks.filter(task => {

    const matchesSearch =
        task.title
            .toLowerCase()
            .includes(filters.search.toLowerCase());

    const matchesCategory =
        filters.category === "All" ||
        task.category === filters.category;

    const matchesPriority =
        filters.priority === "All" ||
        task.priority === filters.priority;

    const matchesStatus =
        filters.status === "All" ||
        (filters.status === "Completed" && task.completed) ||
        (filters.status === "Active" && !task.completed);

    return (
            matchesSearch &&
            matchesCategory &&
            matchesPriority &&
            matchesStatus
        );
    });


    const totalTasks = tasks.length;

    const completedTasks =
        tasks.filter(task => task.completed).length;

    const activeTasks =
        tasks.filter(task => !task.completed).length;

    const highPriorityTasks =
        tasks.filter(task => task.priority === "High").length;

    return (
        <div className="app">

            <Header />

            <main className="container">

                <TaskForm
                    addTask={addTask}
                    editingTask={editingTask}
                    updateTask={updateTask}
                    cancelEdit={cancelEdit}
                />

                <TaskStats
                    totalTasks={totalTasks}
                    activeTasks={activeTasks}
                    completedTasks={completedTasks}
                    highPriorityTasks={highPriorityTasks}
                />

                <FilterBar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                />

                <TaskList
                    tasks={filteredTasks}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    onEdit={startEditTask}
                />

            </main>

        </div>
    );
}

export default App;
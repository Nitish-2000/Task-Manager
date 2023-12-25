import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (text) => {
    const newTasks = tasks.filter((task) => {
      return task !== text;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager App</h1>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList list={tasks} remove={deleteTask} />
    </div>
  );
};

export default App;

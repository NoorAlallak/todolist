import React, { useEffect, useState } from "react";
import "./todolist.css";
function Container() {
  const [task, setTask] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTask([...task, input]);
      setInput("");
    }
  };
  const deleteTask = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  const clearTasks = () => {
    setTask([]);
  };
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="time">
        <h1>{currentTime}</h1>
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          +
        </button>
      </div>
      <div className="list">
        {task.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "#3bc6b4",
              fontWeight: "bold",
              marginLeft: "25px",
            }}
          >
            No tasks added yet!
          </p>
        ) : (
          <ul>
            {task.map((t, index) => (
              <li key={index} className="task-item">
                {t}
                <button
                  onClick={() => deleteTask(index)}
                  className="delete-button"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="bounce">
        <p>Counter: {task.length}</p>
        <button className="clear-button" onClick={clearTasks}>
          clear all
        </button>
      </div>
    </div>
  );
}
export default Container;

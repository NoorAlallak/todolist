import React, { useEffect, useState } from "react";

function Container() {
  const [task, setTask] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    if (task.some((t) => t.toLowerCase() === trimmedInput.toLowerCase())) {
      alert("Task already exists!");
      return;
    }
    setTask([...task, trimmedInput]);
    setInput("");
  };
  const deleteTask = (id) => {
    const newTasks = task.filter((_, i) => i !== id);
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
    <div class="w-[450px] mx-auto mt-[180px] border border-gray-300 rounded-lg shadow-md p-5 flex flex-col items-center gap-2.5">
      <div>
        <h1 class="text-5xl font-bold text-black ">{currentTime}</h1>
      </div>

      <div className="relative w-full mt-3.5">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          class="w-[85%] p-2.5 border border-gray-300 rounded text-base mt-0.5"
        />
        <button
          onClick={addTask}
          class="p-2.5 px-4 bg-[#3bc6b4] text-white rounded ml-2 text-base hover:bg-[#32b0a3] cursor-pointer absolute right-0 top-1"
        >
          +
        </button>
      </div>

      <div className="list w-4/5 mt-2">
        {task.length === 0 ? (
          <p className="text-[#3bc6b4] font-bold text-center mt-1">
            No tasks added yet!
          </p>
        ) : (
          <ul className="space-y-3 mt-2">
            {task.map((task, id) => (
              <li
                key={id}
                className="flex justify-between items-center p-3 border border-gray-300 rounded-md text-base text-gray-700 font-medium w-full"
              >
                {task}
                <button
                  onClick={() => deleteTask(id)}
                  className="bg-red-500 text-white rounded px-3 py-1 text-base hover:bg-red-600 cursor-pointer"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div class="flex justify-between items-center gap-5 mt-2.5">
        <p class="text-black font-bold">Counter: {task.length}</p>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          onClick={clearTasks}
        >
          clear all
        </button>
      </div>
    </div>
  );
}
export default Container;

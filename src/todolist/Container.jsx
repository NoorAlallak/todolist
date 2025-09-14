import React, { useEffect, useState } from "react";

function Container() {
  const [task, setTask] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const addTask = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setPopupMessage("Please enter a valid task.");
      setShowPopup(true);
      return;
    }
    if (task.some((t) => t.toLowerCase() === trimmedInput.toLowerCase())) {
      setPopupMessage("Task already exists.");
      setShowPopup(true);
      return;
    }
    setTask([...task, trimmedInput]);
    setInput("");
  };

  const deleteTask = (id) => setTask(task.filter((_, i) => i !== id));
  const clearTasks = () => setTask([]);

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
    <div className="w-full max-w-lg mx-auto my-10 sm:my-20 md:my-40 border border-gray-300 rounded-lg shadow-md p-3 sm:p-5 flex flex-col items-center gap-2.5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
        {currentTime}
      </h1>

      <div className="flex w-full my-3.5">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 h-10 sm:h-12 p-2 sm:p-2.5 border border-gray-300 rounded text-base"
        />
        <button
          onClick={addTask}
          className="ml-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#3bc6b4] text-white rounded text-base hover:bg-[#32b0a3] cursor-pointer"
        >
          +
        </button>
      </div>

      <div className="list w-full sm:w-4/5 mt-2">
        {task.length === 0 ? (
          <p className="text-[#3bc6b4] font-bold text-center mt-1 text-sm sm:text-base">
            No tasks added yet!
          </p>
        ) : (
          <ul className="space-y-2 sm:space-y-3 mt-2">
            {task.map((t, id) => (
              <li
                key={id}
                className="flex justify-between items-center p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base text-gray-700 font-medium w-full"
              >
                {t}
                <button
                  onClick={() => deleteTask(id)}
                  className="bg-red-500 text-white rounded px-2 sm:px-3 py-1 sm:py-1.5 text-sm sm:text-base hover:bg-red-600 cursor-pointer"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center  sm:gap-5 m-2.5 w-full sm:w-4/5">
        <p className="text-black font-bold text-sm sm:text-base">
          Counter: {task.length}
        </p>
        <button
          className="px-3 sm:px-4 py-2 sm:py-2.5 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer text-sm sm:text-base"
          onClick={clearTasks}
        >
          Clear All
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-2">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-base sm:text-lg font-semibold mb-4">
              {popupMessage}
            </h2>
            <button
              onClick={() => setShowPopup(false)}
              className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#3bc6b4] text-white rounded hover:bg-[#32b0a3] cursor-pointer text-sm sm:text-base"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Container;

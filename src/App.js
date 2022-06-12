import React, { useState } from "react";
import "./App.css";
import ToDo from "./components/TodoList";

const App = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };

  const removeHandler = (index) => {
    let storedTask = [...task];
    storedTask.splice(index, 1);
    setTask(storedTask);
  };
  // Not able to make function work yet, but working progress...
  const archive = (index) => {
    archive.push(...setTask.splice(index, 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTask([...task, input]);
      setInput("");
    }
  };

  function editTask(index) {
    const editedTaskList = task.map((task) => {
      if (index === task.index) {
        return { ...task, setInput };
      }
      return task;
    });
    editTask(editedTaskList);
  }

  return (
    <div className="App">
      <div className="Heading">
        <h1 className="Title">To-Do List</h1>
      </div>
      <div className="Bar">
        <input
          className="Tasks"
          type="text"
          value={input}
          placeholder="Eg. Buy eggs"
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="button" className="Add" onClick={submitHandler}>
          Add
        </button>
      </div>
      {task.map((task, index) => (
        <ToDo
          key={task}
          index={index}
          task={ task }
          editTask={editTask}
          archive={archive}
          removeHandler={removeHandler}
        />
      ))}
      <div className="Subheader">
        <h1 className="Title">Archived</h1>
      </div>
    </div>
  );
};

export default App;

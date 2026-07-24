import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    // setTasks([...tasks, "Learn React"]);
    e.preventDefault()
    setTasks([...tasks, e.target[0].value])
    console.log(e);
  }

  return (
    <div>
      {/* <button onClick={addTask}>Add Task</button> */}
      <form onSubmit={(e) => addTask(e)}>
            <input placeholder="Enter the name"/>
            <button>Submit</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

// homework: when you add next item -> pichle item ko clear krna
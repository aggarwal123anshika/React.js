// import React from 'react'

import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
let initialTodos = [
    {id:0,title:'Buy Milk',done:true},
    {id:1,title:'Goto Gym',done:false},
    {id:2,title:'Meetings',done:false}
]
const TaskApp = () => {

    const [todos,setTodos] = useState(initialTodos)
    console.log(todos);

    function handleAddTodo(title) {
        setTodos([...todos,{
          id:nextId++,
          title:title,
          done:false
        }])
    }

    function handleChangeTodo() {

    }

    function handleDeleteTodo() {

    }
  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo}/> 
      {/* //yha pr hmne props banaya h  */}
      <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
    </div>
  )
}

export default TaskApp
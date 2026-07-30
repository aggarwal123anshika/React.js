// import React from 'react'

import Task from "./Task"

const TaskList = ({todos,onChangeTodo,onDeleteTodo}) => {
  return (
    <div>
        <ol>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task todo={todo} onchange={onChangeTodo} onDelete={onDeleteTodo}/>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default TaskList
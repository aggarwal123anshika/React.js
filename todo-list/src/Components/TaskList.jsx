// import React from 'react'

const TaskList = ({todos,onChangeTodo,onDeleteTodo}) => {
  return (
    <div>
        <ol>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default TaskList
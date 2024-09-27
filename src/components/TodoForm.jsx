import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value}
        placeholder='Enter your task here!' 
        onChange={(e) => setValue(e.target.value)} required />
        <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm

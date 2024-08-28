import React,{useState} from 'react'

export const ToDoForm = ({addTasks}) => {
    const [value, setValue] = useState("")
    const subTask = async (e) => {
      e.preventDefault();
      addTasks(value);  //update the task list in the frontend
      setValue("");  // Clear the input field
  }
  return (
    //tasks input form
    <div className='task-enter-form'>
        <form className='todoForm' onSubmit={subTask}>
            <input type='text' required placeholder='Enter Task' className='addT' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' className='submit-btn'>Add</button>
        </form>
    </div>
  )
}

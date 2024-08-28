import React,{useState} from 'react'

export const EditToDoForm = ({editTasks, task}) => {
    const [value, setValue] = useState(task.task)
    const subTask= e => {
      e.preventDefault();
      editTasks(value, task.id) //edit selected task
    }
  return (
    //form to edit and send the  tasks to backend
    <div>
        <form className='todoForm' onSubmit={subTask}>
            <input type='text' className='upTask' placeholder='Update Task' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button type='submit' className='submit-btn2'>Update</button>
        </form>
    </div>
  )
}

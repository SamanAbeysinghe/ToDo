import React from 'react'
//import icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task,toggleComplete, deleteTasks,editTasks}) => {
  return (
    //task instant containing edit and delete button
    <div className='taskss'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': "not-completed"}`}>{task.task}</p>
      <div className='Eicons'>
        <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => editTasks(task.id)} />
        <FontAwesomeIcon className='trash' icon={faTrash} onClick={() => deleteTasks(task.id)}/>
      </div>
    </div>
  )
}

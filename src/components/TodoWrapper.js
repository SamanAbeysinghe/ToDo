import React,{useState} from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4} from 'uuid';
import { ToDo } from './ToDo'
import { EditToDoForm } from './EditToDoForm';
uuidv4();

export const TodoWrapper = () => {
  const[tasks, setTasks] = useState([])
  //Function to add tasks
  const addTasks = todo => {
    setTasks([...tasks,{id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    console.log(tasks)
  }
  //Toggle task state to complete or not
  const toggleComplete = id => {
    setTasks(tasks.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }
  //Delete tasks
  const deleteTasks = id => {
    setTasks(tasks.filter(todo => todo.id !== id))
  }
  //Edit tasks function
  const editTasks = id => {
    setTasks(tasks.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  const editTodo = (task,id) => {
    setTasks(tasks.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
  }
  return (
    <div className='todoWrapper'>
      <h1>Add Tasks</h1>
        <ToDoForm addTasks={addTasks}/>
        {tasks.map((todo, index)=> (
        todo.isEditing ? (
        <EditToDoForm editTasks={editTodo} task={todo}/>
        ) : (
        <ToDo task={todo} key={index} toggleComplete={toggleComplete} 
        deleteTasks ={deleteTasks} editTasks={editTasks}/>
        ) ))}
    </div>
  )
}


import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect( () => {
    fetch('http://localhost:5000/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [])

//AddTask
const addTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
  })
  const data = await res.json()
  setTasks([...tasks, data])


  // const id = Math.floor(Math.random() * 10000) + 1;
  // const newTask = {id, ...task};
  // setTasks([...tasks, newTask]);
  // console.log(id, task)
} 


//Delete Tasks
const DeleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
  });

  setTasks(tasks.filter((task)=> task.id !== id))
}

//set remainder
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, remainder: !task.remainder} : task))
}

const showTask = () => {
  setShowAddTask(!showAddTask)
}

  return (
    <div className="container">
        <Header showTask={showTask} showAdd={showAddTask} title="Task Tracker"/>
        {showAddTask && <AddTask addTask={addTask}  />}
        <br />
        {
          tasks.length ?
          <Tasks tasks={tasks} DeleteTask={DeleteTask} toggleRemainder={toggleRemainder} />
          : <p style={{color:'green', marginTop: '20px'}}>No Task Here</p>
        }
    </div>
  );
}

export default App;

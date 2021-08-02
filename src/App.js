import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState } from 'react';
function App() {

  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors Appointments',
    day: '10 July at 02:30pm',
    remainder: true,
},
{
    id: 2,
    text: 'Meeting At School',
    day: '20 July at 04:30pm',
    remainder: true,
},
{
    id: 3,
    text: 'Food Shopping',
    day: '30 July at 01:30pm',
    remainder: false,
}])

//AddTask
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
  // console.log(id, task)
} 


//Delete Tasks
const DeleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

//set remainder
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, remainder: !task.remainder} : task))
}

  return (
    <div className="container">
        <Header title="Task Tracker"/>
        <AddTask addTask={addTask} />
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

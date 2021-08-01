import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
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


//Delete Tasks
const DeleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <div className="container">
        <Header title="Task Tracker"/>
        {
          tasks.length ?
          <Tasks tasks={tasks} DeleteTask={DeleteTask} />
          : <p style={{color:'green'}}>No Task Here</p>
        }
    </div>
  );
}

export default App;

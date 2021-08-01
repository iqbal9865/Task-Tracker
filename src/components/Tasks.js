import React, { useState } from 'react';

const Tasks = () => {
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
    return (
        <div>
            {
                tasks.map((task) => <h5 key={task.id}>{task.text}</h5>)
            }
        </div>
    )
}
export default Tasks;
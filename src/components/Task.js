import React from 'react';
import {FaTimes} from 'react-icons/fa'
const Task = ({task, DeleteTask}) => {
    return (
        <div className='task'>
            <h5>{task.text} 
            <FaTimes onClick={() => DeleteTask(task.id)} className='' style={{color:'red', cursor: 'pointer'}} />
            </h5>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
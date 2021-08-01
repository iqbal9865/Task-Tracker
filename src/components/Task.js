import React from 'react';
import {FaTimes} from 'react-icons/fa'
const Task = ({task, DeleteTask, toggleRemainder}) => {
    return (
        <div
        className={`task ${task.reminder && 'reminder'}`}
        onDoubleClick={() => toggleRemainder(task.id)}
      >
        <h3>
          {task.text}{' '}
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => DeleteTask(task.id)}
          />
        </h3>
        <p>{task.day}</p>
      </div>
    );
};

export default Task;
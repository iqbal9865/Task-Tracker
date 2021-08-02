import React from 'react';

const Button = ({ text, color, showTask }) => {

    return (
        <div>
            <button onClick={showTask} style={{backgroundColor: color}} className="btn">{text}</button>
           
        </div>
    );
};

export default Button;
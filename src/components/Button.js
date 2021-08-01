import React from 'react';

const Button = ({ text, color, onclick }) => {

    return (
        <div>
            <button onClick={onclick} style={{backgroundColor: color}} className="btn">{text}</button>
           
        </div>
    );
};

export default Button;
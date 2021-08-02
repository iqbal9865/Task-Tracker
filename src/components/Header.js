import React from 'react';
import Button from './Button';
const Header = ({ title, showTask, showAdd }) => {

    const onclick = () => {
        console.log('Clicked From Header Component')
    }

    return (
        <div className='header'>
            <h2> {title} </h2>
            <Button text={ showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onclick={onclick} showTask={showTask} />
        </div>
    );
};

export default Header;
import React from 'react';
import Button from './Button';
const Header = ({ title }) => {

    const onclick = () => {
        console.log('Clicked From Header Component')
    }

    return (
        <div className='header'>
            <h2> {title} </h2>
            <Button text="ADD" color="green" onclick={onclick} />
        </div>
    );
};

export default Header;
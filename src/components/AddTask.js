import React from 'react';
import {useState} from 'react';
const AddTask = ({ addTask }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [remainder, setRemainder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please Add a Task');
            return
        }

        addTask({ text, day, remainder })

        setText('')
        setDay('')
        setRemainder(false)
    }

    return (
        <form className='' onSubmit={ onSubmit }>

            <div className="form-group">
                {/* <label htmlFor="">Task</label> */}
                <input className='form-control' type="text" placeholder="Add Task" value={text} onChange = { (e) => setText(e.target.value) } />
            </div>

            <div className="form-group">
                {/* <label htmlFor="">Add Day & Time</label> */}
                <input className='form-control' type="text" placeholder="Add Day & Time" value={day} onChange = { (e) => setDay(e.target.value) } />
            </div>

            <div className="form-group">
                <label htmlFor="">Set Remainder</label>
                <input style={{marginLeft:'10px'}} type="checkbox" value={remainder} checked={remainder} onChange = { (e) => setRemainder(e.currentTarget.checked) } />
            </div>
            
            <input type="submit" className='form-control btn-success'  value="Save" />
        </form>
    );
};

export default AddTask;
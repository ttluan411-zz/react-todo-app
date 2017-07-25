import React, {Component} from 'react';

export default function Task(props) {

    return (
        <ul className='task'>
            <li>
            <p style ={{textDecoration: props.completed ? 'line-through': 'none'}}>{props.item}</p>
            <button disabled={props.completed} onClick={()=>props.handleComplete(props.id)}>Completed</button>
            <button onClick={()=>props.delete(props.id)}>Delete</button>
            </li>
        </ul>
    )
}   
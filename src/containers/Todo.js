import React, { useState } from 'react'

const Todo = (props) => {
    const { key, index, value, type } = props;
    return (

        <li key={index}><span>{value}</span>
            <br/>
            {props.moveTodo && <button type="button" className="btn btn-primary" onClick={() => props.moveTodo(value, type)}> Move to Next</button>}
            <br />
            <button type="button" className="btn btn-danger" onClick={() => props.deleteTodo(value,type)}>Delete</button>
            <hr/></li>

    )
}

export default Todo;

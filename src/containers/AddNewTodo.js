import React, {useState} from 'react'

export default function AddNewTodo(props) {
    const[todoName,setTodoName]=useState('');

    return (
        <div className="newTodo">
            <input type="text" 
                    placeholder="Enter name of the todo" 
                    value={todoName}
                    onChange={e => setTodoName(e.target.value)} ></input>
            <br/>
            <button type="button" 
                    className="btn btn-primary" 
                    onClick={()=>{props.addNewTodo(todoName);setTodoName('')}}>Add Todo</button>
        </div>
    )
}

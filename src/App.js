import Todo from './containers/Todo';
import React, { useState, useEffect } from 'react'
import AddNewTodo from './containers/AddNewTodo';

function App() {
  const [todos, setTodos] = useState(['Team meeting', 'Assignment4', 'Scrum Call']);
  const [developTodos, setDevelopTodos] = useState(['Assignment 2']);
  const [completeTodos, setCompleteTodos] = useState(['Report Generation']);

  const deleteTodo = (todo, type) => {
    switch (type) {
      case "Todos":
        setTodos(todos.filter((item) => item != todo))
        break;
      case "developTodos":
        setDevelopTodos(developTodos.filter((item) => item != todo));
        break;
      case "completeTodos":
        setCompleteTodos(completeTodos.filter((item) => item != todo));
        break;
      default:
        break;
    }
  }

  const moveTodo = (todo, type) => {
    switch (type) {
      case "Todos":
        setTodos(todos.filter((item) => item != todo));
        setDevelopTodos([...developTodos, todo]);
        break;
      case "developTodos":
        setDevelopTodos(developTodos.filter((item) => item != todo));
        setCompleteTodos([...completeTodos, todo]);
        break;
      default:
        break;
    }
  }

  const addNewTodo = (todo) => {
    if (todo)
      setTodos([...todos, todo]);

  }

  return (
    <div className="container-fluid">
      <h1 className="text-center">Kahn Bahn board</h1>
      <div className="row">
        <div className="col-3">
          <h2>Add todo</h2>
          <AddNewTodo addNewTodo={addNewTodo} />
        </div>
        <div className="col-3 mx-auto todoColoumn">
          <h2>Todos</h2>
          {
            todos && todos.map((value, index) => {
              return <Todo type="Todos"
                value={value}
                index={index}
                moveTodo={moveTodo}
                deleteTodo={deleteTodo} />
            })
          }
        </div>

        <div className="col-3 mx-auto">
          <h2>In development</h2>
          {
            developTodos && developTodos.map((value, index) => {
              return <Todo type="developTodos"
                value={value}
                index={index}
                moveTodo={moveTodo}
                deleteTodo={deleteTodo} />
            })
          }
        </div>

        <div className="col-3 mx-auto">
          <h2>Complete Todos</h2>
          {
            completeTodos && completeTodos.map((value, index) => {
              return <Todo type="completeTodos"
                value={value}
                index={index}
                deleteTodo={deleteTodo} />
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;

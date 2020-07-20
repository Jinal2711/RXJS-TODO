import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Observable } from 'rxjs';
import TextBox from './components/TextBox';
import ToDoList from './components/TodoItem';
import todoStore from './store';

function App() {

  const [todoState, setTodoState] = useState(null);

  useEffect(() => {
    todoStore.subscribe((val) => {
      console.log(val);
      setTodoState(val)
    })
    todoStore.init()
  }, [])
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">To-Do Your Work!!!</h1>
        </div>
      </div>
      <div className="container">
        <TextBox onSubmit={todo => todoStore.addTodo(todo)}/>
        <ToDoList data={todoState?.data || []}/>
      </div>
    </div>
  );
}

export default App;

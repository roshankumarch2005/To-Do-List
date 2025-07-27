import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/form';
import TodoList from './components/Todolist';
import './App.css';

const App = () => {

  const intialState =JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(intialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [editTodo]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
};

export default App;
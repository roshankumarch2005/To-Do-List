import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, title, completed } : todo
    );
    setTodos(updatedTodo);
    setEditTodo(null);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        placeholder='Enter a todo...'
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
      />
      <button className='button-add' type='submit'>
        {editTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
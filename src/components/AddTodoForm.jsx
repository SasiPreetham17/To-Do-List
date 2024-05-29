import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false,
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
      }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" type="text" value={text} onChange={handleChange} placeholder="Add a task..." />
      <button className="button" type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

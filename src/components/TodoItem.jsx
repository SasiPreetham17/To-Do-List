import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const dateStyle = {
    color: todo.completed ? '#808080' : todo.date === 'Yesterday' ? 'red' : todo.date === 'Today' ? 'blue' : 'grey'
  };

  return (
    <div className="todo">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className="text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <span className="date" style={dateStyle}>{todo.date}</span>
      { <button className="delete" style={{color:'red'}} onClick={handleDelete}>&#x1F5D1;</button>}
    </div>
  );
};

export default TodoItem;

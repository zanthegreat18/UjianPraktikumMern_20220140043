// client/src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleToggle = () => {
    onUpdate(todo._id, { completed: !todo.completed });
  };

  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleToggle}>
        {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;

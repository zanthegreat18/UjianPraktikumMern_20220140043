// client/src/components/TodoList.js
import React from 'react';
import TodoItem from './Todoitem';

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo._id} 
          todo={todo} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TodoList;

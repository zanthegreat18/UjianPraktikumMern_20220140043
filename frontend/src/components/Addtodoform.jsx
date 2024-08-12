// client/src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add new todo" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;

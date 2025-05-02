import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';

const TodoApp = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="todo-app-container">
        <div className="todo-header">
          <h1>Todo</h1>
          <ThemeToggle />
        </div>
        
        <TodoInput />
        <TodoList />
        
        <div className="drag-hint">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

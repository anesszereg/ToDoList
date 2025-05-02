import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';

const TodoApp = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="todo-app-container">
        <div className="todo-header">
          <div className="flex items-center gap-3">
            <img src="/todo-logo.svg" alt="TaskFlow Logo" className="w-8 h-8" />
            <h1>TaskFlow</h1>
          </div>
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

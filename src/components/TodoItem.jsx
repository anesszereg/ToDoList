import React from 'react';
import { updateTodo, deleteTodo } from '../Data/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    // Log the todo object to debug
    console.log('Todo object:', todo);
    console.log('Toggling todo with ID:', todo.id);
    // Dispatch the action with the todo ID
    dispatch(updateTodo(todo.id));
  };
  
  const handleDelete = () => {
    console.log('Deleting todo with ID:', todo.id);
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="todo-item">
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && (
            <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 4.304L3.696 7l6-6"
                stroke="#FFF"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          )}
        </button>
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button 
        onClick={handleDelete}
        className="todo-delete"
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;

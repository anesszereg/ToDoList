import React, { useState } from 'react';
import { addTodo } from '../Data/todoSlice';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const [task, setTask] = useState({
    text: '',
    completed: false,
    id: Date.now()
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (task.text.trim()) {
      dispatch(addTodo(task));
      
      setTask({
        text: '',
        completed: false,
        id: Date.now()
      });
    }
  };

  const toggleCompleted = () => {
    setTask({
      ...task,
      completed: !task.completed
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-input-container flex items-center">
        <button
          type="button"
          onClick={toggleCompleted}
          className={`todo-checkbox ml-4 ${task.completed ? 'completed' : ''}`}
        >
          {task.completed && (
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
        <input
          type="text"
          placeholder="Create a new todo..."
          value={task.text}
          onChange={(e) => setTask({...task, text: e.target.value})}
          className="todo-input"
        />
      </div>
    </form>
  );
};

export default TodoInput;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false }
  ],
  filter: 'all' // 'all', 'active', 'completed'
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    reorderTodos: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [removed] = state.todos.splice(sourceIndex, 1);
      state.todos.splice(destinationIndex, 0, removed);
    }
  }
});

export const { 
  addTodo, 
  updateTodo, 
  deleteTodo, 
  clearCompleted, 
  setFilter,
  reorderTodos 
} = todoSlice.actions;

// Selectors
export const selectAllTodos = state => state.todos.todos;

export const selectFilteredTodos = state => {
  const { todos, filter } = state.todos;
  
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const selectActiveCount = state => {
  return state.todos.todos.filter(todo => !todo.completed).length;
};

export const selectFilter = state => state.todos.filter;

export default todoSlice.reducer;
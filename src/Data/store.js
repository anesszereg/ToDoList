import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

// For debugging
const customMiddleware = store => next => action => {
  console.log('Dispatching action:', action)
  const result = next(action)
  console.log('Next state:', store.getState())
  return result
}

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(customMiddleware)
})
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    todos: todoReducer
  },
})
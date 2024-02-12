import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), todoMsg: "Add Todo", todoComplete:false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoMsg: action.payload.todoMsg,
        todoComplete: action.payload.completed,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state,action) => {
      
       state.todos.map((todo)=>(todo.id === action.payload ? todo.todoComplete = !todo.todoComplete : todo.todoComplete))
    }
  },
});

export const { addTodo,removeTodo,toggleCompleted } = todoSlice.actions

export default todoSlice.reducer

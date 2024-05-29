import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Test Video Calling",
      completed: false,
      date: "Wednesday, May 24",
    },
    { id: 2, text: "Redesign", completed: true, date: "Yesterday" },
    { id: 3, text: "Layout Change", completed: false, date: "Today" },
    {
      id: 4,
      text: "UI Design for Dashboard",
      completed: true,
      date: "Mon, May 27, 2024",
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    loadState: (state) => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        state.todos = JSON.parse(savedTodos);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, loadState } =
  todosSlice.actions;
export default todosSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { loadState } from "./todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

store.dispatch(loadState());

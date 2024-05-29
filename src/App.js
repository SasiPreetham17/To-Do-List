import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="header">
          <h1 className="heading">To-Do List</h1>
          <h2 className="date">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h2>
          <AddTodoForm />
        </div>
        <div className="tasks">
          <TodoList />
        </div>
      </div>
    </Provider>
  );
};

export default App;

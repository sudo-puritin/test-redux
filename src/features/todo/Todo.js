import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoBtn from "./TodoBtn";

const Todo = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoBtn />
    </div>
  );
};

export default Todo;

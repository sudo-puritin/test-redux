import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleTodo } from "./action";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((a) => a.completed);
    case "SHOW_ACTIVE":
      return todos.filter((a) => !a.completed);

    default:
      return todos;
  }
};

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state.todo);
  const filteredTodo = getVisibleTodos(todos, filter);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {filteredTodo.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ color: todo.completed ? "red" : "black" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

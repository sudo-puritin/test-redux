import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./reducer";

let nextIdTodos = 0;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: nextIdTodos++,
      text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}

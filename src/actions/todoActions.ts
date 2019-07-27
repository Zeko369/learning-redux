import { GET_TODOS, NEW_TODO, REMOVE_TODO, EDIT_TODO } from "./types";
import { Dispatch } from "redux";

// Imagine a REST Api here

const getTodos = () => (dispatch: Dispatch) => {
  const todos = ["foo"];
  dispatch({ type: GET_TODOS, payload: todos });
};

const newTodo = (title: string) => (dispatch: Dispatch) => {
  dispatch({ type: NEW_TODO, payload: title });
};

const removeTodo = (id: number) => (dispatch: Dispatch) => {
  dispatch({ type: REMOVE_TODO, payload: { id } });
};

const editTodo = (id: number, title: string) => (dispatch: Dispatch) => {
  dispatch({ type: EDIT_TODO, payload: { id, title } });
};

export { getTodos, newTodo, removeTodo, editTodo };

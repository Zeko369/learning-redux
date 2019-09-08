import { createStore, Reducer } from "redux";

// Action
const increment = () => {
  return { type: "INCREMENT" };
};

const decrement = () => {
  return { type: "DECREMENT" };
};

// Reducer
const counter: Reducer = (
  state: number = 0,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());

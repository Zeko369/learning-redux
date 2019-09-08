import { Reducer } from "redux";

const counterReducer: Reducer = (
  state: number = 0,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

export { counterReducer };

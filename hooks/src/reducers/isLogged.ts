import { Reducer } from "redux";

const isLoggedReducer: Reducer = (
  state: boolean = false,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    default:
      return state;
  }
};

export { isLoggedReducer };

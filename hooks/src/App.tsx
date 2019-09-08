import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, set } from "./actions";
import { signOut, signIn } from "./actions";

import "./App.css";

interface State {
  count: number;
  isLoggedIn: boolean;
}

const App: React.FC = () => {
  const counter = useSelector((state: State) => state.count);
  const isLogged = useSelector((state: State) => state.isLoggedIn);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(set(10))}>Set to 10</button>

      <h3>Logged {isLogged ? "in" : "out"}</h3>
      <button onClick={() => dispatch(isLogged ? signOut() : signIn())}>
        {isLogged ? "signOut" : "signIn"}
      </button>
    </div>
  );
};

export default App;

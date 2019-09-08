import React from "react";
import "./App.css";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
        <Todos />
      </div>
    </Provider>
  );
};

export default App;

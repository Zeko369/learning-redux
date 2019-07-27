import React, { useState } from "react";
import { connect } from "react-redux";
import { newTodo } from "../actions/todoActions";

const TodoForm = (props: any) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title !== "") {
      props.newTodo(title, "");
      setTitle("");
    }
  };

  return (
    <div>
      <h2>Create todo</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { newTodo }
)(TodoForm);

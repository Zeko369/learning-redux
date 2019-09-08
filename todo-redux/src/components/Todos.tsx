import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTodos, removeTodo, editTodo } from "../actions/todoActions";

const Todos = (props: any) => {
  const { getTodos, removeTodo, editTodo, todos } = props;
  const [editing, setEditing] = useState(-1);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const edit = (index: number, text: string) => {
    setEditing(index);
    setInput(text);
  };

  const onSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault();
    editTodo(index, input);
    setEditing(-1);
  };

  return (
    <div>
      <h2>List of todos</h2>
      <ul>
        {todos.map((item: any, index: number) => (
          <li key={`todo-${index}`}>
            {editing === index ? (
              <form onSubmit={e => onSubmit(e, index)}>
                <input
                  type="text"
                  value={input}
                  onChange={(e: any) => setInput(e.target.value)}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              item
            )}
            <button onClick={() => removeTodo(index)}> - </button>
            <button onClick={() => edit(index, item)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.todos.items
});

export default connect(
  mapStateToProps,
  { getTodos, removeTodo, editTodo }
)(Todos);

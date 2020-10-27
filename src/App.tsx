import React, { useContext } from "react";
import { Todo } from "./components/Todo";
import { StateContext } from "./context/StateProvider";

function App() {
  const { todos } = useContext(StateContext);

  if (todos.length === 0) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h1 className="p-4">Todo list</h1>
        <div className="list-group">
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

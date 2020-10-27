import React, { useContext } from "react";
import { Spinner } from "./components/Spinner";
import { Todo } from "./components/Todo";
import { StateContext } from "./context/StateProvider";

function App() {
  const { todos } = useContext(StateContext);

  if (todos.length === 0) {
    return <Spinner />;
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

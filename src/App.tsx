import React, { useContext } from "react";
import { Todo } from "./components/Todo";
import { useApi } from "./lib/useApi";
import { StateContext } from "./context/StateProvider";

function App() {
  const { loading } = useApi();
  const { todos } = useContext(StateContext);
  // since it's also used in Todo component, I would define type | interface here
  // const [state, setState] = React.useState<TodoData[]>([]);

  //  dependency array must be present to prevent useEffect being called on every App component update
  // React.useEffect(() => {
  //   (async () => {
  //     // const -> immutable, preffered to var
  //     const awaitedTodos = await fetchTodos();
  //     if (!awaitedTodos) return;

  //     // when updating local state, we should do it this way to ensure we're getting the latest state of "state" :D
  //     // no need for looping here, array spred syntax can be used
  //     setState((prevState) => [...prevState, ...awaitedTodos]);
  //   })();
  // }, []);

  if (loading && todos.length === 0) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;

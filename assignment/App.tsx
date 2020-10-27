import React from "react";

import Todo from "./Todo";

// rework this into regular api call, feel free to use any open api

// var keyword is deprecated, should be defined as fn expression with "const" or as function declaration
// return type should be defined as interface | type, since it's used on more places
var todos = (): Promise<{ id: string; title: string }[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Go shopping",
        },
        {
          id: "2",
          title: "Job interview",
        },
        {
          id: "3",
          title: "Prepare homework",
        },
      ]);
    }, 100);
  });

function App() {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([]);

  // dependency array should be passed to useEffect hook, otherwise it'll be called on every component update, in this case [setState]
  React.useEffect(() => {
    (async () => {
      // const -> immutable, preffered to var
      var awaitedTodos = await todos();

      // when updating local state, should combine existing state by parameter of setState not reference state variable directly to ensure latest state of "state" :)
      // no need for looping here, array spread syntax can be used
      for (var i = 0; i < awaitedTodos.length; i++) {
        setState([...state, awaitedTodos[i]]);
      }
    })();
  });

  return (
    <div>
      {state.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;

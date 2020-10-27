import React from "react";
import { Link } from "react-router-dom";
import { TodoData } from "../types";

interface TodoProps {
  todo: TodoData;
}

// functional components can be organised better in the codebase since their logic can be extracted to custom hooks and use hooks in general
// component is memoized, unless props changes (React.memo is doing shallow comparsion, custom comparsion function can be provided if needed)
export const Todo = React.memo<TodoProps>(({ todo }) => {
  return (
    <div className="list-group-item">
      <Link to={`/todo/${todo.id}`} style={{ textDecoration: "none" }}>
        <span className="text-dark">{todo.title}</span>
      </Link>
    </div>
  );
});

import React from "react";
import { Link } from "react-router-dom";
import { TodoData } from "../types";

interface TodoProps {
  todo: TodoData;
}

export const Todo = React.memo<TodoProps>(({ todo }) => {
  return (
    <div>
      <Link to={`/todo/${todo.id}`}>
        <span>{todo.title}</span>
      </Link>
    </div>
  );
});

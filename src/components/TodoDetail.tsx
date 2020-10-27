import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";

interface TodoProps {
  todoId: string;
}

export const TodoDetail: React.FC<TodoProps> = ({ todoId }) => {
  const { todos } = useContext(StateContext);

  const todo = todos.find((t) => t.id === Number(todoId))!;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
    </div>
  );
};

import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";

interface TodoProps {
  todoId: string;
}

export const TodoDetail: React.FC<TodoProps> = ({ todoId }) => {
  const { todos } = useContext(StateContext);

  const todo = todos.find((t) => t.id === Number(todoId));

  if (!todo) return <h3>loading</h3>;

  return (
    <div className="container">
      <h1 className="p-4">{todo.title}</h1>
      <p className="p-4">{todo.body}</p>
    </div>
  );
};

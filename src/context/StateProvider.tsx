import React, { useState } from "react";
import { TodoData } from "../types";

interface StateContextType {
  todos: TodoData[];
  setTodos: React.Dispatch<React.SetStateAction<TodoData[]>>;
}

export const StateContext = React.createContext<StateContextType>({
  todos: [],
  setTodos: () => {},
});

export const StateProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoData[]>([]);

  return (
    <StateContext.Provider value={{ todos, setTodos }}>
      {children}
    </StateContext.Provider>
  );
};

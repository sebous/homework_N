import { useContext, useEffect, useState } from "react";
import { TodoData } from "../types";
import { StateContext } from "../context/StateProvider";

export function useApi() {
  const [loading, setLoading] = useState(true);
  const { setTodos } = useContext(StateContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: TodoData[] = await response.json();

        setTodos(data.slice(0, 10));
        setLoading(false);
      } catch (err) {
        // retry would be handled by some fetching library here like apollo/swr
        // handle exception here
        console.log(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [setTodos]);

  return { loading };
}

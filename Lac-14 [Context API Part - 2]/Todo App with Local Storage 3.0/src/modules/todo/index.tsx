import { useEffect } from "react";
import { useTodoContext } from "../../context/TodoContext";
import Form from "./Form";
import TodoItem from "./TodoItem";

const Todo = () => {
  const { todos, setTodos } = useTodoContext();

  useEffect(() => {
    const localStorageTodos = JSON.parse(
      localStorage.getItem("todos") as string
    );
    if (localStorageTodos && localStorageTodos.length > 0 && setTodos) {
      setTodos(localStorageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <div>
        <h1>Manage Your Todos</h1>
        <Form />
        {todos.map((eachTodo) => (
          <TodoItem key={eachTodo.id} todo={eachTodo} />
        ))}
      </div>
    </div>
  );
};

export default Todo;

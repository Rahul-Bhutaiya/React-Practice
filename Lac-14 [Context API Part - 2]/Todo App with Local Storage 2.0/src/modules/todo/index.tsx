import React, { useEffect } from "react";
import Form from "./Form";
import { useTodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoModule: React.FC = () => {
  const { todos, setTodos } = useTodoContext();
  useEffect(() => {
    const contextTodos = JSON.parse(localStorage.getItem("todos") as string);
    if (contextTodos && contextTodos.length > 0) {
      setTodos(contextTodos);
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

export default TodoModule;

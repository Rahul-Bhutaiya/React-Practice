import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
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
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((eachTodo) => (
            <TodoItem key={eachTodo.id} todo={eachTodo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoModule;

import { createContext, ReactNode, useContext, useState } from "react";

export interface typeTodos {
  id: number;
  title: string;
  checked: boolean;
}

interface typeTodoContext {
  todos: typeTodos[];
  setTodos: (todos: typeTodos[]) => void;
  addTodo: (todoText: string) => void;
  editTodo: (id: number, todo: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<typeTodoContext | undefined>(undefined);

export const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<typeTodos[]>([]);
  const addTodo = (todoText: string) => {
    const newTodo = { id: Date.now(), title: todoText, checked: false };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };
  const editTodo = (id: number, todo: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, title: todo } : eachTodo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, checked: !eachTodo.checked }
          : eachTodo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, addTodo, editTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("Todo Context is not defined");
  }
  return context;
};

import { createContext, ReactNode, useContext, useState } from "react";

export interface typeTodos {
  id: number;
  todoText: string;
  completed: boolean;
}

interface typeTodoContext {
  todos: typeTodos[];
  setTodos?: (todos: typeTodos[]) => void;
  addTodo: (todoText: string) => void;
  updateTodo: (id: number, todoText: string) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const initialTodoContext: typeTodoContext = {
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
};

const TodoContext = createContext<typeTodoContext>(initialTodoContext);

export const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<typeTodos[]>([]);
  const addTodo = (todoText: string) => {
    const newTodo = { id: Date.now(), todoText, completed: false };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };
  const updateTodo = (id: number, todoText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, todoText } : eachTodo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };
  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  return context;
};

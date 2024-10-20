import { createContext, ReactNode, useContext, useState } from "react";

export interface typeTodos {
  id: number;
  todoText: string;
  completed: boolean;
}

interface typeTodoContext {
  todos: typeTodos[];
  setTodos: (todos: typeTodos[]) => void;
  addTodo: (todoText: string) => void;
  updateTodo: (id: number, todoText: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodoCheck: (id: number) => void;
}

const TodoContext = createContext<typeTodoContext | undefined>(undefined);

export const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<typeTodos[]>([]);
  const addTodo = (todoText: string) => {
    setTodos((prevTodos) => [
      { id: Date.now(), todoText, completed: false },
      ...prevTodos,
    ]);
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
  const toggleTodoCheck = (id: number) => {
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
        toggleTodoCheck,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("Todo Context is not Defined.");
  }
  return context;
};

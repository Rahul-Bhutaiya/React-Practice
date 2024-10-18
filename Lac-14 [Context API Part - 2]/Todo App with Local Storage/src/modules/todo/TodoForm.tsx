import { useEffect, useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const [isError, setIsError] = useState(false);
  const { addTodo } = useTodoContext();
  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (!todoText) {
      setIsError(true);
      return;
    }
    addTodo(todoText);
    setTodoText("");
  };
  useEffect(() => {
    if (isError && todoText) {
      setIsError(false);
    }
  }, [todoText]);

  return (
    <>
      <form className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />

        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </form>
      {isError && (
        <h2 className="text-red-500 p-2 text-sm font-semibold">
          Please, Enter Todo Text!!!
        </h2>
      )}
    </>
  );
}

export default TodoForm;

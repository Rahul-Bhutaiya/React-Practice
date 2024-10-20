import { useEffect, useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const Form = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [isError, setIsError] = useState(false);
  const { addTodo } = useTodoContext();
  const handleAddNewTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newTodoText) {
      setIsError(true);
      return;
    }
    addTodo(newTodoText);
    setNewTodoText("");
  };
  useEffect(() => {
    if (isError && newTodoText) {
      setIsError(false);
    }
  }, [newTodoText]);
  return (
    <>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Write Todo..."
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <button>Add</button>
      </form>
      {isError && <h3>Please, Write Your Todo...</h3>}
    </>
  );
};

export default Form;

import { useEffect, useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const Form = () => {
  const { addTodo } = useTodoContext();
  const [newTodoText, setNewTodoText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleAddTodo = (event: React.FormEvent) => {
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
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Write Todo..."
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <button>Add</button>
      </form>
      {isError && <h3>Please, Write your todo...</h3>}
    </div>
  );
};

export default Form;

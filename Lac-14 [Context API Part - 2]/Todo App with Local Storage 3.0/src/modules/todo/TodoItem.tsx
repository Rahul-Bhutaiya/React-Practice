import { useState } from "react";
import { typeTodos, useTodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }: { todo: typeTodos }) => {
  const [todoUpdateText, setTodoUpdateText] = useState(todo.todoText);
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTodo, toggleComplete, updateTodo } = useTodoContext();
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <input
        type="text"
        placeholder="Enter Todo Text Here..."
        value={todoUpdateText}
        onChange={(event) => setTodoUpdateText(event.target.value)}
        disabled={!isEditing}
        className="placeholder:text-red-400"
      />
      <button
        onClick={() => {
          if (!todoUpdateText || todo.completed) return;
          if (isEditing) {
            updateTodo(todo.id, todoUpdateText);
            setIsEditing(false);
            return;
          }
          setIsEditing(true);
        }}
      >
        {isEditing ? "📁" : "✏️"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;

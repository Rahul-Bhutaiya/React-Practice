import { useState } from "react";
import { typeTodos, useTodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }: { todo: typeTodos }) => {
  const { deleteTodo, toggleTodoCheck, updateTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoText, setEditTodoText] = useState(todo.todoText);

  const handleTodoEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    if (!editTodoText) return;
    updateTodo(todo.id, editTodoText);
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCheck(todo.id)}
      />
      <input
        type="text"
        value={editTodoText}
        placeholder="Enter Todo Text Here..."
        disabled={!isEditing}
        onChange={(event) => setEditTodoText(event.target.value)}
        className="placeholder:text-red-500"
      />
      <button onClick={() => handleTodoEdit()} disabled={todo.completed}>
        {isEditing ? "📁" : "✏️"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;

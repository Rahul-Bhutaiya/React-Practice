import { TodoContextProvider } from "./context/TodoContext";
import Todo from "./modules/todo";

function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;

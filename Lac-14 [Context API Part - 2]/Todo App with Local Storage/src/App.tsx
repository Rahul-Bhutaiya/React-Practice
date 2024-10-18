import { TodoContextProvider } from "./context/TodoContext";
import TodoModule from "./modules/todo";

function App() {
  return (
    <TodoContextProvider>
      <TodoModule />
    </TodoContextProvider>
  );
}

export default App;

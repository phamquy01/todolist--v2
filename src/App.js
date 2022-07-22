import "./App.css";
import TodoList from "./view/TodoList";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <TodoList />
      </div>
    </StoreProvider>
  );
}

export default App;

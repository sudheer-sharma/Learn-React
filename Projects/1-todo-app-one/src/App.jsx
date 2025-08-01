import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <div className="items-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </>
  );
}

export default App;

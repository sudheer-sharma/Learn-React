import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let todoItems = [
    {
      Name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      Name: "Go to college",
      dueDate: "5/11/2025",
    },
    {
      Name: "Like this video",
      dueDate: "right nows",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;

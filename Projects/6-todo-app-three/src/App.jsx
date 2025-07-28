import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  let handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item Name ${itemName} and DueDate ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { Name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.Name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;

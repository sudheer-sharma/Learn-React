import styles from "./TodoItems.module.css";

import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.Name} totdoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;

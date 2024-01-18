import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const TodoItem = ({ todoItemData }) => {
  const { todo, userId } = todoItemData;
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.TodoItem}>
      <h3 className={isChecked ? styles.Strike : ""}>{todo}</h3>
      <p className={styles.userId}>{userId}</p>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TodoItem;

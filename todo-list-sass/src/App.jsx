import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import styles from "./App.module.scss";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.TodoList}>
        <Header />
        {todoList.map((todo) => (
          <TodoItem todoItemData={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

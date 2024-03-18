import AppName from "./components/AppName";
import TodoItemContainer from "./components/TodoItemContainer";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
function App() {
  const [addToDoItems, setToDoItems] = useState([]);
  const handler = (newToDo) => {
    let newList = [...addToDoItems, newToDo];
    setToDoItems(newList);
  };

  const deleteHandler = (todoItemName) => {
    const newTodoItems = addToDoItems.filter((i) => i.name !== todoItemName);
    setToDoItems(newTodoItems);
  };

  return (
    <center>
      <AppName />
      <AddTodo handler={handler} />
      {addToDoItems.length === 0 && <WelcomeMsg />}
      <TodoItemContainer items={addToDoItems} deleteHandler={deleteHandler} />
    </center>
  );
}

export default App;

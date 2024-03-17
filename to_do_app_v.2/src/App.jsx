import AppName from "./components/AppName";
import TodoItemContainer from "./components/TodoItemContainer";
import AddTodo from "./components/AddTodo";
import "./App.css";
function App() {
  const list = [
    {
      name: "Buy Milk",
      date: "24/12/2023",
    },
    {
      name: "Complete Work",
      date: "01/10/2024",
    },
    {
      name: "Exercise",
      date: "4/02/2022",
    },
    {
      name: "Dinner",
      date: "12/04/2021",
    },
    {
      name: "Buy Milk",
      date: "24/12/2023",
    },
    {
      name: "Complete Work",
      date: "01/10/2024",
    },
    {
      name: "Exercise",
      date: "4/02/2022",
    },
    {
      name: "Dinner",
      date: "12/04/2021",
    },
  ];

  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItemContainer items={list} />
    </center>
  );
}

export default App;

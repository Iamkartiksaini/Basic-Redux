import Button from "./button";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const todos = useSelector((state) => state.todoList);
  console.log("totals ", todos.length);

  return (
    <div
      style={{ height: "100%", minHeight: "100vh" }}
      className="container-fluid overflow-x-hidden pb-5 d-flex justify-content-evenly flex-column bd-highlight mb-3 bg-secondary text-white"
    >
      <Header />
      <h1>Welcome to React Redux </h1>
      <p className="border-bottom border-1 border-dark text-center ">
        Total Todos : {todos.length}
      </p>
      <TodoList />
      <Button />
    </div>
  );
}

export default App;

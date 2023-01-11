import Button from "./button";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter.counter);

  return (
    <>
      <h1>Welcome to React Redux </h1>
      {counter}
      {/* <Header /> */}
      <Button />
    </>
  );
}

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Header() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Header counter is {counter}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  );
}

export default Header;

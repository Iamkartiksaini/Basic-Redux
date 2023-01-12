import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Button as Btn } from "react-bootstrap";

function Button() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <p>normal Counter : {counter}</p>
      <h1>Normal Counter</h1>
      <Btn
        variant="primary m-1"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        add one
      </Btn>
      <Btn
        variant="primary m-1"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        minus one
      </Btn>
    </div>
  );
}

export default Button;

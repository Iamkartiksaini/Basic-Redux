import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const headRef = useRef();
  const textRef = useRef();
  const allTodo = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  console.log("TodoList ", allTodo);

  function addTodo() {
    dispatch({
      type: "addTodoItem",
      isCompleted: false,
      heading: headRef.current.value,
      text: textRef.current.value,
    });
  }

  function itemPop(index) {
    dispatch({
      type: "deleteItem",
      removeThis: index,
    });
  }
  function updateTodo(index) {
    dispatch({
      type: "editItem",
      updateItem: index,
    });
  }

  return (
    <div className="allTodos">
      <div className="form d-flex flex-row justify-center ">
        <input
          className="form-control  "
          type="text"
          ref={headRef}
          placeholder="Heading"
        />
        <input
          className="form-control  "
          type="text"
          ref={textRef}
          placeholder="write todo text"
        />
        <button className="btn btn-info" onClick={addTodo}>
          Add todo
        </button>
        <button className="btn btn-warning" onClick={itemPop}>
          pop todo
        </button>
      </div>
      <div className="items">
        <ul className="p-0 mt-3">
          {allTodo.length > 0 ? (
            allTodo.map((value, index) => {
              const { isCompleted, text, heading } = value;
              return (
                <li key={index} className="d-flex m-1 rounded">
                  <h3>
                    {index}. {heading}
                  </h3>
                  <p>{text}</p>
                  <input
                    type="checkbox"
                    onChange={() => updateTodo(index)}
                    checked={isCompleted}
                  />
                </li>
              );
            })
          ) : (
            <p>Add todos</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

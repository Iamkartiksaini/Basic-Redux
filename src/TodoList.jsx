import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
  const headRef = useRef();
  const textRef = useRef();
  const [addBtn, setAddBtn] = useState("add");
  let x = "add";
  let y = 0;
  const allTodo = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  function addTodo(whatDo) {
    if (whatDo == "add") {
      dispatch({
        type: "addTodoItem",
        isCompleted: false,
        heading: headRef.current.value,
        text: textRef.current.value,
      });
    }
    if (whatDo == "edit") {
      dispatch({
        type: "editItem",
        isCompleted: false,
        heading: headRef.current.value,
        text: textRef.current.value,
        hint: "textUpdate",
        updateItem: y,
      });
      x = "add";
    }
    setAddBtn("add");
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
      hint: "checkbox",
      text: allTodo[index].text,
      heading: allTodo[index].heading,
      isCompleted: allTodo[index].isCompleted,
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
        <button
          className={addBtn == "add" ? "btn btn-info" : "btn btn-success"}
          onClick={() => addTodo(x)}
        >
          {addBtn == "add" ? "Add Todo" : "Save"}
        </button>
      </div>
      <div className="items">
        <ul className="p-0 mt-3">
          {allTodo.length > 0 ? (
            allTodo.map((value, index) => {
              const { isCompleted, text, heading } = value;
              return (
                <li key={index} className="d-flex m-1 gap-5 rounded">
                  <h3>{heading}</h3>
                  <p>{text}</p>
                  <input
                    type="checkbox"
                    onChange={() => {
                      updateTodo(index);
                    }}
                    checked={isCompleted}
                  />
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      headRef.current.value = heading;
                      textRef.current.value = text;
                      x = "edit";
                      y = index;
                      setAddBtn("edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => itemPop(index)}
                  >
                    Delete
                  </button>
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

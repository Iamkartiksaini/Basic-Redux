import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  let list = [];
  const [filtered, setFill] = useState([]);
  const allTodo = useSelector((state) => state.todoList);

  list = [...allTodo];

  const searchItem = useRef();

  function filterTodoList() {
    if (searchItem.current.value !== "") {
      setFill([]);
      list.map((value, index) => {
        return value.text.includes(searchItem.current.value) ||
          value.heading.includes(searchItem.current.value)
          ? filtered.includes(index)
            ? setFill(filtered)
            : setFill((pre) => [...pre, index])
          : null;
      });
    } else {
      setFill([]);
    }
  }
  return (
    <>
      <nav className="navbar bg-transparent">
        <div
          style={{
            borderBottom: "3px solid grey",
            paddingBottom: "10px",
          }}
          className="container-fluid"
        >
          <a className="navbar-brand text-white">Navbar</a>
          <form className="d-flex" onClick={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={searchItem}
            />
            <button
              className=" text-white btn btn-outline-info"
              type="submit"
              onClick={filterTodoList}
            >
              Search
            </button>
          </form>
        </div>
        <div
          className="p-3"
          style={{
            backgroundColor: "#323232",
          }}
        >
          --- Search Result ---
          {list.map((val, index) => {
            return filtered.includes(index) ? (
              <p key={index}>
                {index} {val.heading}
              </p>
            ) : null;
          })}
        </div>
      </nav>
    </>
  );
}

export default Header;

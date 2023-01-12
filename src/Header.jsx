import React from "react";
function Header() {
  return (
    <>
      <nav
        className="navbar bg-transparent"
        style={{ backgroundColor: " #e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white">Navbar</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className=" text-white btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;

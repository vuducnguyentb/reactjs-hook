import "../views/Nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="topnav">
        <NavLink activeClassName="active1" to="/" exact>
          Home
        </NavLink>
        <NavLink activeClassName="active1" to="/timer">
          Timer App
        </NavLink>
        <NavLink activeClassName="active1" to="/todo-app">
          Todo Apps
        </NavLink>
        <NavLink activeClassName="active1" to="/secret">
          Secret
        </NavLink>
        <NavLink activeClassName="active1" to="/blog">
          Blog
        </NavLink>
      </div>
    </>
  );
};

export default Nav;

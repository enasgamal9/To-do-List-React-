import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg">
      <div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className=".nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/todo-list" ? "active" : ""}`}
                to="/todo-list">My List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
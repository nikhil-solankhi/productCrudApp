import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navUl">
        <ul>
          <li className="navLi">
            <Link to="/home">Home</Link>
          </li>
          <li className="navLi">
            <Link to="/about">About Us</Link>
          </li>
          <li className="navLi">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navUlLog">
        <ul>
          <li className="navLi">
            <Link to="/register">Register</Link>
          </li>
          <li className="navLi">
            <Link to="/prodetails">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

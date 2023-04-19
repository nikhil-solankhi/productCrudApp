import { Link } from "react-router-dom";

const Navbar = () => {
    return <div className="navbar">
        <div className="navUl">
            <ul >
                <li className="NavLi">
                    <Link to={"/home"}>Home</Link>
                </li>
                <li className="NavLi">
                    <Link to={"/about"}>About Us</Link>
                </li>
                <li className="NavLi">
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
        <div className="navUlLog">

            <ul>

    
                <li className="NavLi">
                    <Link to={"/register"}>Register</Link>
                </li>
                <li className="NavLi">
                    <Link to={"/prodetails"}>Products</Link>
                </li>
            </ul>
        </div>
    </div>
}
export default Navbar;
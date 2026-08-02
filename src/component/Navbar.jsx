import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

    return(
        <nav className="navbar">

            <div className="logo">
                ReactApp
            </div>


            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/counter">Counter</Link>

                <Link to="/users">Users</Link>

                <Link to="/api">API</Link>

            </div>


        </nav>
    )
}

export default Navbar;
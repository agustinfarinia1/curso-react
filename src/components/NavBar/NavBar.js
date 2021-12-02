import "./NavBar.scss";
import { Carrito } from "../Carrito/Carrito";
import { Link } from "react-router-dom";
import { FaMouse } from "react-icons/fa";
import { BsFillKeyboardFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

export const NavBar = () => {
    return (
        <header className="navbar">
            <h1>
                <Link to="/">TechShop</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <FiMonitor />
                        <Link to="/categoria/Monitor">Monitor</Link>
                    </li>
                    <li>
                        <BsFillKeyboardFill />
                        <Link to="/categoria/Teclado">Teclado</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Mouse">
                            <FaMouse />
                            Mouse
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <Carrito />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

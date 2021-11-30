import "./NavBar.scss";
import { Carrito } from "../Carrito/Carrito";

export const NavBar = () => {
    return (
        <header className="navbar">
            <h1>Proyecto</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Monitor</a>
                    </li>
                    <li>
                        <a href="#">Teclado</a>
                    </li>
                    <li>
                        <a href="#">Mouse</a>
                    </li>
                    <li>
                        <Carrito />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

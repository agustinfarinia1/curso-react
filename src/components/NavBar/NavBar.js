import "./NavBar.scss";
import { Carrito } from "../Carrito/Carrito";

export const NavBar = () => {
    return (
        <header className="navbar">
            <h1>Proyecto</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Boton-1</a>
                    </li>
                    <li>
                        <a href="#">Boton-2</a>
                    </li>
                    <li>
                        <a href="#">Boton-3</a>
                    </li>
                    <li>
                        <Carrito />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

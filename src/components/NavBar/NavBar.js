import "./NavBar.scss";
import { Carrito } from "../Carrito/Carrito";

export const NavBar = () => {
    return (
        <header className="navbar">
            <h1>Proyecto</h1>
            <nav>
                <ul>
                    <li>Boton-1</li>
                    <li>Boton-2</li>
                    <li>Boton-3</li>
                </ul>
            </nav>
            <Carrito />
        </header>
    );
};

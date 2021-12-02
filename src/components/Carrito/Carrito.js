import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../Context/CartContext";
import "./Carrito.scss";

export const Carrito = () => {
    const { totalCantidad } = useContext(CartContext);
    return (
        <div className="carrito">
            <AiOutlineShoppingCart />
            <span>{totalCantidad()}</span>
        </div>
    );
};

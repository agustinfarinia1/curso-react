import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const agregarAlCarrito = (item) => {
        setCart([...cart, item]);
    };

    const totalCantidad = () => {
        return cart.reduce((acc, el) => acc + el.cantidad, 0);
    };
    const isInCart = (id) => {
        return cart.some((el) => el.id === id);
    };

    const costoTotal = () => {
        return cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    };

    const removerCarrito = (idProducto) => {
        return setCart(cart.filter((el) => el.id !== idProducto));
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                agregarAlCarrito,
                isInCart,
                totalCantidad,
                costoTotal,
                vaciarCarrito,
                removerCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

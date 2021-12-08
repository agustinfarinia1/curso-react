import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useCounter } from "../../hooks/useCounter";
import { CartContext } from "../Context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const { isInCart } = useContext(CartContext);
    const { counter, increment, decrement } = useCounter(0, item.stock, 0);

    const navigate = useNavigate();

    const handlerVolver = () => {
        navigate(-1);
    };
    const handleAgregar = () => {
        counter > 0 &&
            agregarAlCarrito({
                id: item.id,
                precio: item.precio,
                nombre: item.nombre,
                cantidad: counter,
                categoria: item.categoria,
            });
    };
    return (
        <div className="container">
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.desc}</p>
            {!isInCart(item.id) ? (
                <ItemCount
                    increment={increment}
                    decrement={decrement}
                    onAdd={handleAgregar}
                    counter={counter}
                    min={0}
                    max={item.stock}
                />
            ) : (
                <Link to="/cart" className="btn btn-success my-2">
                    Ver carrito
                </Link>
            )}
            <button className="btn btn-primary mx-3" onClick={handlerVolver}>
                Volver
            </button>
        </div>
    );
};

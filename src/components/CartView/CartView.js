import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

export const CartView = () => {
    const { cart, costoTotal, vaciarCarrito, removerCarrito } =
        useContext(CartContext);

    return (
        <div className="container my-5">
            {cart.length === 0 ? (
                <>
                    <h2>EL carrito esta vacio.</h2>
                    <Link to="/" className="btn btn-success">
                        Volver al home
                    </Link>
                </>
            ) : (
                <>
                    <h2>Carrito</h2>
                    <hr />

                    {cart.map((el) => (
                        <div key={el.id}>
                            <h3>{el.nombre}</h3>
                            <p>Precio: ${el.precio}</p>
                            <p>Cantidad: {el.cantidad}</p>
                            <button
                                className="btn btn-danger"
                                onClick={() => removerCarrito(el.id)}
                            >
                                <BsFillTrashFill />
                                Borrar Producto
                            </button>
                        </div>
                    ))}

                    <hr />

                    <h4>Total: ${costoTotal()}</h4>

                    <button onClick={vaciarCarrito} className="btn btn-danger">
                        Vaciar carrito
                    </button>
                    <Link to="/checkout" className="btn btn-success mx-3">
                        Terminar mi compra
                    </Link>
                </>
            )}
        </div>
    );
};

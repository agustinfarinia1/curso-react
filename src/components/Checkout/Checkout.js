import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        tel: "",
    });

    const [orderId, setOrderId] = useState(null);

    const { cart, costoTotal, vaciarCarrito } = useContext(CartContext);

    const generarOrden = (comprador) => {
        const orden = {
            comprador: comprador,
            productos: cart,
            total: costoTotal(),
            fecha: Timestamp.fromDate(new Date()),
        };
        const ordenes = collection(db, "ordenes");

        addDoc(ordenes, orden).then((res) => {
            setOrderId(res.id);
        });
        vaciarCarrito();
    };

    const handleInputChange = (e) => {
        setValores({ ...valores, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            valores.nombre.length > 5 &&
            valores.email.length > 5 &&
            valores.tel > 1000000000 &&
            valores.tel < 1000000000000
        ) {
            generarOrden(valores);
        } else {
            alert("sus datos son incorrectos,vuelva a ingresar");
        }
    };

    return (
        <div className="container my-5">
            {orderId ? (
                <>
                    <h2>Gracias por su compra!</h2>
                    <p>Numero de compra:{orderId}</p>
                    <Link className="btn btn-primary" to="/">
                        Volver
                    </Link>
                </>
            ) : (
                <>
                    <h2>Resumen compra</h2>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            value={valores.nombre}
                            onChange={handleInputChange}
                            name="nombre"
                            className="form-control my-2"
                            placeholder="Nombre y apellido"
                            type="text"
                            disabled={cart.length > 0 ? false : true}
                        />
                        <input
                            value={valores.email}
                            onChange={handleInputChange}
                            name="email"
                            className="form-control my-2"
                            placeholder="Email"
                            type="email"
                            disabled={cart.length > 0 ? false : true}
                        />

                        <input
                            value={valores.tel}
                            onChange={handleInputChange}
                            name="tel"
                            className="form-control my-2"
                            placeholder="Teléfono"
                            type="tel"
                            disabled={cart.length > 0 ? false : true}
                        />

                        <button
                            type="submit"
                            className="btn btn-success mb-3"
                            disabled={cart.length > 0 ? false : true}
                        >
                            Enviar
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

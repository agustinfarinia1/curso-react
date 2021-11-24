import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export const ContadorItems = ({ stock = 10, inicial = 0 }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const handleRestar = () => {
        cantidad > inicial && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    return (
        <div className="m-4">
            <button onClick={handleRestar} className="btn btn-outline-primary">
                -
            </button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">
                +
            </button>

            <div>
                <button className="btn btn-success my-2">Agregar</button>
            </div>
        </div>
    );
};

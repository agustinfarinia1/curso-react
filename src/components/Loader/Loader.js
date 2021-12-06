import React from "react";
import "./Loader.scss";
import { BiLoaderCircle } from "react-icons/bi";
export const Loader = () => {
    return (
        <div className="loader">
            <h2>Cargando Productos</h2>
            <BiLoaderCircle className="circulo" />
        </div>
    );
};

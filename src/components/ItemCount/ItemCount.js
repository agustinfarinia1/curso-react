import React from "react";

export const ItemCount = ({ increment, decrement, onAdd, counter }) => {
    return (
        <div className="m-4">
            <button
                className={
                    counter ? "btn btn-primary" : "btn btn-outline-primary"
                }
                disabled={counter ? false : true}
                onClick={decrement}
            >
                -
            </button>

            <span className="mx-2">{counter}</span>

            <button
                className={
                    counter === 20
                        ? "btn btn-outline-primary"
                        : "btn btn-primary"
                }
                disabled={counter === 20 ? true : false}
                onClick={increment}
            >
                +
            </button>

            <div>
                <button
                    className="btn btn-success my-2"
                    onClick={onAdd}
                    disabled={counter === 0 ? true : false}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};

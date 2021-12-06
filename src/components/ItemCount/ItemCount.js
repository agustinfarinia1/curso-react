import React from "react";

export const ItemCount = ({
    increment,
    decrement,
    onAdd,
    counter,
    min,
    max,
}) => {
    return (
        <div className="m-4">
            <button
                className={
                    counter === min
                        ? "btn btn-outline-danger"
                        : "btn btn-primary"
                }
                disabled={counter ? false : true}
                onClick={decrement}
            >
                -
            </button>

            <span className="mx-2">{counter}</span>

            <button
                className={
                    counter === max
                        ? "btn btn-outline-danger"
                        : "btn btn-primary"
                }
                disabled={counter === max ? true : false}
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

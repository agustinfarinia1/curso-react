import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const ItemCount = ( {stock=20,inicial = 0} ) => {

    const{counter,increment,decrement} = useCounter(inicial,stock,0)

    return (
        <div className="m-4">
            <button onClick={decrement}>-</button>

            <span className="mx-2">{counter}</span>

            <button onClick={increment}>+</button>

            <div>
                <button className="btn btn-success my-2" >
                    Agregar
                </button>
            </div>
        </div>
    )
}
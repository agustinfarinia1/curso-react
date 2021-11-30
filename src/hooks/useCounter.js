import { useState } from "react";

export const useCounter = (inicial = 0,max,min) => {
    const [counter, setCounter] = useState(inicial);

    const increment = () => {
        counter < max && setCounter(counter + 1);
    };

    const decrement = () => {
        counter > min && setCounter(counter - 1);
    };

    return {
        counter,
        increment,
        decrement,
    };
};

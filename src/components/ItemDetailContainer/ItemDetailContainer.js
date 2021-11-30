import { useEffect, useState } from "react";
import { pedirDatos, pedirItem } from "../../helpers/pedirDatos";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    console.log(item);

    useEffect(() => {
        pedirItem(1).then((resp) => setItem(resp));
    }, []);

    return <div>{/*item && <itemDetail item={item} />*/}</div>;
};

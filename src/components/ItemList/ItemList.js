import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
    return (
        <div className="container row d-flex justify-content-center">
            <h2>Productos</h2>
            {items.map((el) => (
                <Item key={el.idProducto} item={el} />
            ))}
        </div>
    );
};

import { Item } from "../Item/Item";

export const ItemList = ({ items, categoria }) => {
    return (
        <div className="container row d-flex justify-content-center">
            {categoria === undefined ? (
                <h2>Productos</h2>
            ) : (
                <h2>Productos {categoria}</h2>
            )}
            <hr />
            {items.map((el) => (
                <Item key={el.idProducto} item={el} />
            ))}
        </div>
    );
};

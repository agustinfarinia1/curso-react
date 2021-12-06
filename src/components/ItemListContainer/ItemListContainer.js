import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos");
        const q = categoryId
            ? query(productosRef, where("categoria", "==", categoryId))
            : productosRef;

        getDocs(q)
            .then((resp) => {
                const productos = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                setItems(productos);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div className="d-flex justify-content-center">
            {loading ? (
                <Loader />
            ) : (
                <ItemList items={items} categoria={categoryId} />
            )}
        </div>
    );
};

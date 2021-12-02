import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { CartProvider } from "./components/Context/CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/categoria/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:itemId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                {/* <ItemCount /> */}
                {/* <PostApi /> */}
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;

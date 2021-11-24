import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ContadorItems } from "./components/ContadorItems/ContadorItems";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer texto="Bienvenidos al proyecto" />
            <ContadorItems stock={20} inicial={1} />
            <Footer />
        </div>
    );
}

export default App;

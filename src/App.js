import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { PostApi } from "./components/PostApi/PostApi";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer texto="holaa" />
            <ItemCount />
            {/* <PostApi /> */}
            <ItemDetailContainer />
            <Footer />
        </div>
    );
}

export default App;

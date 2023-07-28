import NavBar from "./Components/NavBar/NavBar";
import Itemlistcontainer from "./Components/ItemListContainer/ItemListContainer";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Cart/Cart";
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
                        <Route path="/category/:categoryId" element={<Itemlistcontainer></Itemlistcontainer>}></Route>
                        <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                        <Route path="/cart" element={<Cart></Cart>}></Route>
                        <Route path='/checkout' element={<CheckOut />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
                    </Routes>
                </CartProvider>

            </BrowserRouter>

          


        </div>
    )
}

export default App;
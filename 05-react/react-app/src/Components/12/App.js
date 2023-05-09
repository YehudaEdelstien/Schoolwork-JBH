import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
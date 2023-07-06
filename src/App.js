import "./App.css";
import { Carrousel } from "./components/Carrousel";
import Categories from "./components/Categories";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/components/css/components.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carrousel /> <Categories /> <ItemListContainer />
              </>
            }
          />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/category/:type" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;

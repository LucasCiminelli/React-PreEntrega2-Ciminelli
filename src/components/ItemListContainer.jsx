import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { pedirData } from "../helpers/pedirData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState("Productos");
  const category = useParams().type

  useEffect(() => {
    pedirData()
      .then((res) => {
        if(category){
          const filteredProducts = res.filter((prod) => prod.type === category);
          setTitle(category);
        setProductos(filteredProducts);
        } else{
          setProductos(res);
          setTitle("Productos");
        }
      
    });
  }, [category]);

  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center w-100">
        {productos.length=== 0 ? <Spinner/> : <ItemList productos={productos} title={title}/>}
      </div>
    </Container>
  );
};

export default ItemListContainer;

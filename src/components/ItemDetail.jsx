import React from "react";
import Container from "react-bootstrap/esm/Container";

const ItemDetail = ({ item }) => {
  return (
    <Container fluid className="px-0 mx-0">
      <row>
        <div className="detail-container d-flex justify-content-center   py-5 flex-wrap ">
          <div className="">
            <img className="detail-img" src={item.image} alt={item.title} />
          </div>
          <div className="detail-info  d-flex flex-column pt-3">
            <h3>{item.title}</h3>
            <p>{item.type}</p>
            <p>Descripción</p>
            <p>${item.price}</p>
          </div>
        </div>
      </row>
    </Container>
  );
};

export default ItemDetail;

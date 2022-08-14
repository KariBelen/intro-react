import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = ({ img, titulo, descripcion }) => {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;

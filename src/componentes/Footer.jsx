import React from "react";
import Badge from "react-bootstrap/Badge";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Galeria de imagenes de Karina Gonzalez todos los derechos reservados
      </p>
      <div>
        <h6>
          Nuevas Imagenes <Badge bg="secondary">New</Badge>
        </h6>
      </div>
    </div>
  );
};

export default Footer;

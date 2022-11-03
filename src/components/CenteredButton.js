import React from "react";
import { Container, Button } from "react-bootstrap";

const CenteredButton = ({ children, onClick }) => (
  <Container>
    <div className="d-flex justify-content-center  ">
      <Button className="my-5 " variant="success" size="lg" onClick={onClick}>
        {children}
      </Button>
    </div>
  </Container>
);

export default CenteredButton;

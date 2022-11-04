import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import logo from "../assets/logo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center text-light">
          <Image src={logo} className="mb-5" />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="lead">Número da Conta</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lead">Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Link to="/dashboard">
              <Button variant="success" type="submit">
                Criar conta
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;

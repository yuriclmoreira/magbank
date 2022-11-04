import React from "react";
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = () => {
  const data = [
    { date: "29/07", description: "Supermercado", value: "300" },
    { date: "27/07", description: "Apple", value: "500" },
    { date: "22/07", description: "Saque  24h 012345", value: "1000" },
    { date: "21/07", description: "Saque  24h 012345", value: "9000" },
  ];
  return (
    <Container className="dashboard py-5">
      <Row>
        <Col xs={12} lg={4}>
          <Row className="d-flex aligh-items-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h3>Yuri Moreira</h3>
              <p className="text-muted">Ag:1234 c/c:4321-5</p>
            </Col>
          </Row>
          <div className="d-grid gap-2">
            <Button
              className="dashboard__button dashboard__button--active"
              variant="link"
              size="lg"
            >
              Minha conta
            </Button>
            <Button className="dashboard__button" variant="link" size="lg">
              Pagamentos
            </Button>
            <Button className="dashboard__button" variant="link" size="lg">
              Estrato
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
          <h3 className="my-5">Conta corrente</h3>
          <h6>
            <strong>
              <small>Saldo em conta corrente</small>
            </strong>
          </h6>
          <h4 className="text-success mb-4">
            <small>R$</small>3.500<small>,00</small>
          </h4>
          <h6>
            <strong>
              <small>Cheque especial</small>
            </strong>
          </h6>
          <p className="mb-0">Limite disponivel</p>
          <p className="mb-4">R$ 5.000,00</p>
          <Button variant="secondary">Ver extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="mt-5">
          <Tabs className="mt-lg-5 pt-lg-5" defaultActiveKey="latest">
            <Tab eventKey="latest" title="Últimos lançamentos">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

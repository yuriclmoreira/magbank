import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";
import "./Dashboard.scss";

const Dashboard = ({ name, account }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: "Minha Conta", path: "/dashboard", exact: true },
    { text: "Pagamentos", path: "/dashboard/payments", exact: true },
    { text: "Extrato", path: "/dashboard/history", exact: true },
  ];

  const data = {
    latestBalance: [
      { date: "29/07", description: "Supermercado", value: "300" },
      { date: "27/07", description: "Apple", value: "500" },
      { date: "22/07", description: "Saque  24h 012345", value: "1000" },
      { date: "21/07", description: "Saque  24h 012345", value: "9000" },
    ],

    futureBalance: [
      { date: "29/07", description: "Apple", value: "300" },
      { date: "27/07", description: "Saque  24h 012345", value: "500" },
      { date: "22/07", description: "Supermercado", value: "1000" },
      { date: "21/07", description: "Apple", value: "9000" },
    ],

    history: [
      {
        date: "17/07",
        description: "SAQUE 24H 012345",
        value: -200.0,
        balance: "",
      },
      {
        date: "17/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "2.780,00",
      },
      {
        date: "19/07",
        description: "ESTACIONAMENTO 123234",
        value: -12.0,
        balance: "",
      },
      {
        date: "19/07",
        description: "COMPRA INTERNET 123432",
        value: -450.0,
        balance: "",
      },
      {
        date: "19/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "2.318,00",
      },
      {
        date: "21/07",
        description: "SUPERMERCADO 2312332",
        value: -275.9,
        balance: "",
      },
      {
        date: "21/07",
        description: "ESTACIONAMENTO 123234",
        value: -12.0,
        balance: "",
      },
      {
        date: "21/07",
        description: "SHOPPING 123432",
        value: -180.0,
        balance: "",
      },
      {
        date: "21/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "1.851,00",
      },
      {
        date: "22/07",
        description: "SUPERMERCADO 2312332",
        value: -275.9,
        balance: "",
      },
      {
        date: "22/07",
        description: "DEPÓSITO 123234",
        value: 1000.0,
        balance: "",
      },
      {
        date: "22/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "2.576,00",
      },
    ],
  };

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
              <h3>{name}</h3>
              <p className="text-muted">{account}</p>
            </Col>
          </Row>
          <div className="d-grid gap-2">
            {links.map(({ text, path, exact }, key) => (
              <Link to={path} exact={exact ? exact : false}>
                <Button
                  className={`dashboard__button text-left ${
                    key === activeLink ? "dashboard__button--active" : ""
                  }`}
                  variant="link"
                  size="lg"
                  d-block
                  onClick={() => setActiveLink(key)}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </div>
        </Col>
        <Routes>
          <Route path="/" element={<AccountBalance data={data} />} />
          <Route path="/payments" element={<AccountPayments />} />
          <Route path="/history" element={<AccountHistory data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default Dashboard;

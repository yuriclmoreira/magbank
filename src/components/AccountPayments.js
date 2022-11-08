import React from "react";
import { Button, Col, Tab, Tabs, Form, Row } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-5">
      <h3 className="mt-4 ">Pagamentos</h3>
      <Tabs className="mt-lg-5 pt-lg-5" defaultActiveKey="boleto">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group controlId="formBarCode" className="my-5">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o código de barras"
              />
            </Form.Group>
            <Form.Group
              controlId="formPaymentType"
              key="inline-radio"
              className="mb-5"
            >
              <div className="d-flex ">
                <Form.Label className="mx-3">Forma de pagamento</Form.Label>
                <Form.Check
                  type="radio"
                  id="debit"
                  label="Debito em conta Corrente"
                  name="paymentType"
                  className="mx-3"
                />
                <Form.Check
                  type="radio"
                  id="credit"
                  className="ml-3"
                  label="Cartão de Crédito"
                  name="paymentType"
                />
              </div>
            </Form.Group>
            <Button variant="success">Continuar</Button>
          </Form>
        </Tab>
        <Tab eventKey="Transfer" title="Transferências">
          <Form className="m-5">
            <Row>
              <Col xs={12} lg={4} className="mt-3">
                <Form.Group>
                  <Form.Label>
                    <strong>Banco</strong>
                  </Form.Label>
                  <Form.Select>
                    <option>Selecione</option>
                    <option value="1">Magbank</option>
                    <option value="2">Bradesco</option>
                    <option value="3">Itau</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} lg={4} className="mt-3">
                <Form.Group>
                  <Form.Label>
                    <strong>Agência</strong>
                  </Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
              <Col xs={12} lg={4} className="mt-3">
                <Form.Group>
                  <Form.Label>
                    <strong>Conta corrente</strong>
                  </Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} lg={4} className="mt-3">
                <Form.Group>
                  <Form.Label>
                    <strong>Valor da transferência</strong>
                  </Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
              <Col xs={12} lg={4} className="mt-3">
                <Form.Group>
                  <Form.Label>
                    <strong>Identificação nos extratos</strong>
                  </Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>

            <Button className="mt-5" variant="success">
              Continuar
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;

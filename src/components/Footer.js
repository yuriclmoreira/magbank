import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6}>
          <Image src={logo} className="magbank" />
        </Col>
        <Col xs={12} lg={4}>
          <Image src={applestore} />
          <Image src={googleplay} className="store" />
        </Col>
        <Col xs={12} lg={2} className="magbank">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            color="#7c7c7c"
            size="2x"
            className="store"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            color="#7c7c7c"
            size="2x"
            className="store"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7c7c7c"
            size="2x"
            className="store"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

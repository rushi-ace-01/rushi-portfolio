import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        © {new Date().getFullYear()} <strong>Rushikesh Gavhane</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

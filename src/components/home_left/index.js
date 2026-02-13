import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-router-dom";

function Home_Left() {
  return (
    <Container className="home-left">
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">

          <h1 className="first-line">
            Hello 👋
          </h1>

          <h2 className="second_line">
            I am <strong>Rushikesh Gavhane</strong>
          </h2>

          <h3>
            <ReactTypingEffect
              text={[
                "MSc Data Analytics & AI @ QMUL",
                "Explainable AI • RAG Systems • Risk Modelling",
                "ML Engineer | Data Scientist | AI Builder"
              ]}
              className="typical"
              speed={80}
              eraseDelay={2000}
            />
          </h3>

          <br />

          {/* ABOUT */}
          <Link to="/about" className="home-left-link">
            <Button
              variant="outline-light"
              size="lg"
              className="home-left-aboutmme-btn"
            >
              About Me
            </Button>
          </Link>

          &nbsp;

          {/* NOTES / PROJECTS */}
          <Link to="/projects" className="home-left-link">
            <Button
              variant="outline-light"
              size="lg"
              className="home-left-aboutmme-btn"
            >
              AI & Data Science Notes
            </Button>
          </Link>

          &nbsp;

          {/* CONTACT */}
          <Link to="/contact" className="home-left-link">
            <Button
              variant="outline-light"
              size="lg"
              className="home-left-aboutmme-btn"
            >
              Contact Me
            </Button>
          </Link>

        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;

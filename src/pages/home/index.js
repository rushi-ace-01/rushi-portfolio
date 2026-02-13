import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Rushikesh Gavhane</title>

        {/* Update domain later if you switch from Vercel */}
        <link
          rel="canonical"
          href="https://rushi-portfolio.vercel.app/"
        />

        <meta
          name="description"
          content="Rushikesh Gavhane — MSc Data Analytics & AI at Queen Mary University of London. Building explainable, production-ready AI systems, RAG pipelines, and ML solutions."
        />
      </Helmet>

      <Animate to="1" from="0" attributeName="opacity">
        <Particles params={particles} className="particle" />

        <Container className="App-header" fluid>
          <Row className="App-main">
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>

            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
          </Row>

import React, { Component } from 'react';
import '../about/style.css';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import { Helmet } from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

class About extends Component {
  render() {
    return (
      <Container className="About-header" fluid>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Rushikesh Gavhane</title>

          {/* Canonical URL (update domain later if needed) */}
          <link
            rel="canonical"
            href="https://rushi-portfolio.vercel.app/about"
          />

          <meta
            name="description"
            content="About Rushikesh Gavhane — MSc Data Analytics & AI student at Queen Mary University of London, focused on explainable AI, RAG systems, time-series analysis, and production-ready machine learning systems."
          />
        </Helmet>

        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />

          <Row className="About-main">
            <HamburgerMenu />
            <CV />
          </Row>

          <Row className="About-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default About;

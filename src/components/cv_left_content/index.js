import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import cv1 from '../../assets/img/cv1.png';
import cv2 from '../../assets/img/cv2.png';
import cv3 from '../../assets/img/cv3.png';
import cv4 from '../../assets/img/cv4.png';
import Lightbox from 'react-image-lightbox';
import {Modal, Button} from 'react-bootstrap';
import Projects from '../projects';
import { Link } from 'react-router-dom';


const images = [
  cv1,cv2,cv3,cv4
];

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render(){
    const { photoIndex, isOpen, show } = this.state;
    return (
      <Slide left > 
        <Bounce >
          <div className="clc_main">
          <div className="clc_container">
            <Fade top cascade>
              <h1 className="clc_header">About</h1>
            </Fade>

            <ColoredLine color="#FFC466" />

            <Fade top>
              <p className="about_intro">
                MSc Data Analytics @ QMUL
              </p>

              <p className="about_text">
                I am an MSc student at <span>Queen Mary University of London</span>,
                focused on building <span>explainable</span>, <span>production-ready</span> AI systems.
              </p>

              <p className="about_text">
                My work spans <span>Retrieval-Augmented Generation (RAG), Large Language Models</span>, 
                machine learning, time-series analysis, and risk modelling. I enjoy
                working at the intersection of theory and real-world constraints such
                as <span>latency</span>, <span>interpretability</span>, and system design.
              </p>

              <p className="about_text">
                I have built end-to-end AI projects including an Epydemix RAG chatbot
                for epidemiological modelling tutorials, a latency-aware decision
                system inspired by trading environments, and an explainable
                underwriting risk scoring platform.
              </p>

              <p className="about_text emphasis">
                I am particularly interested in applied machine learning, data
                science, and AI engineering roles where models must be reliable,
                transparent, and impactful — not just accurate.
              </p>
            </Fade>


            <Fade top cascade>
              <div className="AboutBtnContainer">

                <Link to={'./project'} className="left"><FontAwesomeIcon icon={faHdd} className="left_icon" /><br/><br/>Projects & Experiences</Link>
                <div className="right"><FontAwesomeIcon onClick={() => this.setState({ show: true })} icon={faGithubSquare} className="right_icon"/><br/><br/>Git Projects</div>
              </div>
            </Fade>
          </div>
          {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                  }
                />
              )}
              <Modal show={show} size="xl" onHide={this.toggleModal} centered>
                <Modal.Header className="modalHeader" closeButton>
                  <Projects/>
                </Modal.Header>
                <Button onClick={() => this.setState({ show: false })} variant="outline-light" size="lg" className="modal-exit-btn about_modal">
                  Close
                </Button>
              </Modal>
          </div>
        </Bounce>
      </Slide>
   );
  }

  
}

export default CLC;

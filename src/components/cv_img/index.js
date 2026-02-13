import React from 'react';
import '../cv_img/style.css';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';

// 👉 replace with your photo
import rushi from '../../assets/img/rushi.jpg';

const CRI = () => {
  return (
    <Roll right>
      <Zoom>
        <div className="cv_img_container">
          <img
            src={rushi}
            alt="Rushikesh Gavhane"
            className="cv_profile_img"
          />

          <a
            href="/Rushikesh_Gavhane_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv_download_btn"
          >
            Download CV
          </a>
        </div>
      </Zoom>
    </Roll>
  );
};

export default CRI;

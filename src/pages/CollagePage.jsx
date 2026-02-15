import React from "react";
import "./CollagePage.css";
import { useNavigate } from "react-router-dom";

import bgImage from "../img/love.png";
import cameraImg from "../img/poloroid.png";
import nextBtn from "../img/next.png";

import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpeg";
import p4 from "../img/p4.jpeg";
import p5 from "../img/p5.jpeg";
import p6 from "../img/p6.jpeg";
import p7 from "../img/p7.jpeg";
import p8 from "../img/p8.jpeg";
import p9 from "../img/p9.jpeg";
import p10 from "../img/p10.jpeg";
import p11 from "../img/p11.jpeg";
import p12 from "../img/p12.jpeg";

const CollagePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="collage-page-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="collage-page-container">

        <img src={p1} className="collage-polaroid collage-photo1" alt="" />
        <img src={p2} className="collage-polaroid collage-photo2" alt="" />
        <img src={p3} className="collage-polaroid collage-photo3" alt="" />
        <img src={p4} className="collage-polaroid collage-photo4" alt="" />
        <img src={p5} className="collage-polaroid collage-photo5" alt="" />
        <img src={p6} className="collage-polaroid collage-photo6" alt="" />
        <img src={p7} className="collage-polaroid collage-photo7" alt="" />
        <img src={p8} className="collage-polaroid collage-photo8" alt="" />
        <img src={p9} className="collage-polaroid collage-photo9" alt="" />
        <img src={p10} className="collage-polaroid collage-photo10" alt="" />
        <img src={p11} className="collage-polaroid collage-photo11" alt="" />
        <img src={p12} className="collage-polaroid collage-photo12" alt="" />

        <img src={cameraImg} className="collage-camera-center" alt="camera" />

        <img
          src={nextBtn}
          alt="next"
          className="collage-next-button"
          onClick={() => navigate("/letter")}
        />

      </div>
    </div>
  );
};

export default CollagePage;

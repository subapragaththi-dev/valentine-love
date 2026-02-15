import React from "react";
import "./photos.css";

import coupleImg from "../img/photo.jpeg";
import cdImg from "../img/cd1.png";
import loveTexture from "../img/love2.png";
import favSticker from "../img/fav1.png";
import heartSticker from "../img/heart1.png";
import heart4 from "../img/heart1.png";   // NEW IMPORT
import waxStamp from "../img/seal1.png";
import gingham from "../img/texture.png";
import anatomyHeart from "../img/heart2.png";
import cookieHeart from "../img/heart3.png";
import valentineText from "../img/wish.png";
import nextBtn from "../img/next.png";
import { useNavigate } from "react-router-dom";


const Photos = () => {
    const navigate = useNavigate();
  return (
    <div className="page">

      <div
        className="right-half"
        style={{ backgroundImage: `url(${loveTexture})` }}
      ></div>

      <img src={gingham} alt="gingham" className="gingham-corner" />

      <img src={anatomyHeart} alt="heart" className="anatomy-heart" />

      <img src={valentineText} alt="valentine wish" className="valentine-text" />

      <img src={favSticker} alt="fav" className="fav-sticker" />

      {/* SCATTERED HEARTS */}
      <img src={heartSticker} className="scatter s1" alt="" />
      <img src={heart4} className="scatter s2" alt="" />
      <img src={heartSticker} className="scatter s3" alt="" />
      <img src={heart4} className="scatter s4" alt="" />
      <img src={heartSticker} className="scatter s5" alt="" />
      <img src={heart4} className="scatter s6" alt="" />
      <img src={heartSticker} className="scatter s7" alt="" />
      <img src={heart4} className="scatter s8" alt="" />
      <img src={heartSticker} className="scatter s9" alt="" />

      <img src={waxStamp} alt="wax" className="wax" />

      <img src={cdImg} alt="cd" className="cd" />

      <div className="photo-wrapper">
        <div className="photo-frame">
          <img src={coupleImg} alt="memory" />
        </div>
        <img src={cookieHeart} alt="cookie heart" className="cookie-heart" />
      </div>
      <img
        src={nextBtn}
        alt="next"
        className="next-button"
        onClick={() => navigate("/forever")}
        />

    </div>
  );
};

export default Photos;

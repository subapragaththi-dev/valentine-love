import React from "react";
import "./EnvelopePage.css";
import heartSticker from "../img/heart1.png";
import heart4 from "../img/heart1.png"; 

import envelopeImg from "../img/letter.png";

import p1 from "../img/p2.jpeg";
import p2 from "../img/p4.jpeg";
import p3 from "../img/p6.jpeg";

const EnvelopePage = () => {
  return (
    <div className="envelope-page">

      {/* LEFT POLAROIDS */}
      <img src={p1} className="polaroid p1" alt="" />
      <img src={p2} className="polaroid p2" alt="" />
      <img src={p3} className="polaroid p3" alt="" />

      {/* ENVELOPE */}
      <div className="envelope-wrapper">

        {/* LETTER */}
        <div className="letter">
          <p>
            

I don’t know where we stand right now 🤍, but I just wanted to say something from my heart 💭❤️

It’s been 3 years since the day I first saw you ✨. From that first moment in 11th standard, when I sent you that Instagram request without even thinking twice 📩… to all our late-night chats 🌙, small fights 😅, misunderstandings 💔, long-distance struggles 📍… everything.

Maybe we had more arguments than happy moments 🥺. Maybe we didn’t handle things perfectly 🤷🏻‍♂️. But still, these 3 years meant a lot to me ❤️‍🩹.

Thank you for loving me ❤️.
Thank you for accepting me when I first confessed 🙈.
Thank you for being a part of my life 🌸, even if things weren’t always easy.

No matter what happens next 🌅, I’ll always respect what we had 🤍.
You were my first love 💖, and that will always be special to me ✨.

I truly wish you happiness 😊, peace 🕊️, and all the success in your life 🌟.

Thank you… for these 3 years ❤️‍🩹

 
          </p>
        </div>

        <img src={envelopeImg} className="envelope-img" alt="envelope" />

        

      {/* SCATTERED HEARTS */}
      <img src={heartSticker} className="scatter1 s1" alt="" />
      <img src={heart4} className="scatter1 s2" alt="" />
      <img src={heartSticker} className="scatter1 s3" alt="" />
      <img src={heart4} className="scatter1 s4" alt="" />
      <img src={heartSticker} className="scatter1 s5" alt="" />
      <img src={heart4} className="scatter1 s6" alt="" />
      <img src={heartSticker} className="scatter1 s7" alt="" />
      <img src={heart4} className="scatter1 s8" alt="" />
      <img src={heartSticker} className="scatter1 s9" alt="" />

      </div>

    </div>
  );
};

export default EnvelopePage;

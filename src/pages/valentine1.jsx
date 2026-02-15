import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/valentine1.css";

const ValentinePage1 = () => {
  const navigate = useNavigate();

  const [noPos, setNoPos] = useState({
    top: "60%",
    left: "55%",
  });

  const [yesScale, setYesScale] = useState(1);
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [noHidden, setNoHidden] = useState(false);

  const moveNoButton = () => {
    if (noHoverCount < 11) {
      const top = Math.random() * 70 + 10;
      const left = Math.random() * 70 + 10;

      setNoPos({
        top: `${top}%`,
        left: `${left}%`,
      });

      setYesScale((prev) => prev + 0.12);
      setNoHoverCount((prev) => prev + 1);
    } else {
      // After 11 tries → hide NO behind YES
      setNoHidden(true);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <h1>
          Ria ❤️ <br />
          Will you be my Valentine?
        </h1>

        <button
          className="yes-btn"
          style={{ transform: `scale(${yesScale})` }}
          onClick={() => navigate("/yes")}
        >
          Yes
        </button>

        <button
          className={`no-btn ${noHidden ? "no-hidden" : ""}`}
          style={{
            top: noHidden ? "60%" : noPos.top,
            left: noHidden ? "38%" : noPos.left,
          }}
          onMouseEnter={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ValentinePage1;

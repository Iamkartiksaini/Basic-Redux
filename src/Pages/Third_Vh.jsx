import React from "react";
import "../Styles/Third_Vh.css";
import img from "../rocket.png";
function Third_Vh() {
  return (
    <div className="Third_Vh">
      <div className="float">
        <div className="rocket">
          <img id="rocket" src={img} alt="" />
        </div>
        <div className="textGraphic">
          <div className="text"> Get started with minimal kit today</div>
          <div className="buttons">
            <button>Purchase Now</button>
            <button>Get free Version</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third_Vh;

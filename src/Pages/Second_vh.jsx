import React from "react";
import "../Styles/Second_Vh.css";

function Second_vh() {
  return (
    <div className="Second_Vh">
      <div className="intro">
        <p>MINIMAL UI</p>
        <h1>What minimal helps you?</h1>
      </div>
      <div className="cardIntro">
        <div className="firstCard">
          <div>icon</div>
          <div>
            <h3>Branding</h3>
            <p>Consistent design makes it easy to brand your own</p>
          </div>
        </div>
        <div className="secondCard">
          <div>icon</div>
          <div>
            <h3>UI & UX Design</h3>
            <p>
              The kit is built on the principles of the atomic design system. It
              helps you to create projects fastest and easily customized
              packages for your projects.
            </p>
          </div>
        </div>
        <div className="thirdCard">
          <div>icon</div>
          <div>
            <h3>Development</h3>
            <p>Easy to customize and extend, saving you time and money.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second_vh;

import React from "react";
import "../Styles/First_Vh.css";

function First_vh() {
  return (
    <div className="First_Vh">
      <div className="text_intro">
        <div className="Minimals_text">
          <h2>new project with</h2>
          <h1>Minimal</h1>
          <p>
            The starting point for your next project is based on MUI.Easy
            customization Helps you build apps faster and better.
          </p>
        </div>
        <div className="Preview">
          <button>Live Preview</button>
          <button>Designs Preview</button>
        </div>
        <div className="findOn">
          <div className="available_text">
            <p>AVAILABLE FOR </p>
          </div>
          <div className="available_icons">
            <p>Ruby</p>
            <p>Javascript</p>
            <p>Type-Script</p>
            <p>NodeJs</p>
          </div>
        </div>
      </div>
      <div className="graphicIntro">
        <div className="firstSlide">
          <div className="card"> content 1</div>
          <div className="card"> content 2</div>
          <div className="card"> content 3</div>
          <div className="card"> content 4</div>
          <div className="card"> content 5</div>
          <div className="card"> content 6</div>
          <div className="card"> content 7</div>
        </div>
        <div className="secondSlide">
          <div className="card"> content 1</div>
          <div className="card"> content 2</div>
          <div className="card"> content 3</div>
          <div className="card"> content 4</div>
          <div className="card"> content 5</div>
          <div className="card"> content 6</div>
          <div className="card"> content 7</div>
        </div>
      </div>
    </div>
  );
}

export default First_vh;

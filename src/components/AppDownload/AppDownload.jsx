import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="app__download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app__download-platforms">
        <img src={assets.play_store} alt="img" />
        <img src={assets.app_store} alt="img" />
      </div>
    </div>
  );
}

export default AppDownload;

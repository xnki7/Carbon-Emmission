import React from "react";
import "./Apps.css";
import AppCard from "../../Components/AppCard/AppCard";
import spotify from "../../assets/spotify.svg";
import figma from "../../assets/figma.svg";
import brave from "../../assets/brave.svg";
import vscode from "../../assets/vscode.svg";
import postman from "../../assets/postman.svg";
import { desktopAppDetails } from "../../constant";

const Apps = () => {
  const appImages = {
    Spotify: spotify,
    Figma: figma,
    Brave: brave,
    "VS Code": vscode,
    Postman: postman,
  };
  return (
    <div className="Apps">
      <h1>Your Apps</h1>
      {desktopAppDetails.map((app) => {
        const appImage = appImages[app.name];
        return (
          <AppCard img={appImage} name={app.name} percentage={app.percentage} />
        );
      })}
    </div>
  );
};

export default Apps;

import React from "react";
import "./AppDetail.css";
import { useLocation } from "react-router-dom";
import spotify from "../../assets/spotify.svg";
import figma from "../../assets/figma.svg";
import brave from "../../assets/brave.svg";
import vscode from "../../assets/vscode.svg";
import postman from "../../assets/postman.svg";
import storage from "../../assets/storage.svg";
import time from "../../assets/time.svg";
import stop from "../../assets/stop.svg";
import uninstall from "../../assets/uninstall.svg";
import open from "../../assets/open.svg";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const AppDetail = () => {
  const location = useLocation();
  const app = location.state.app;

  const appImages = {
    Spotify: spotify,
    Figma: figma,
    Brave: brave,
    "VS Code": vscode,
    Postman: postman,
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours",
        data: app.usageData,
        fill: true,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        beginAtZero: true,
        max: 24,
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="AppDetail">
      <div className="title">
        <img src={appImages[app.name]} alt="" />
        <p>{app.name}</p>
      </div>
      <div className="actionButtons">
        <button>
          <img src={open} alt="" />
          <p>Open</p>
        </button>
        <button>
          <img src={stop} alt="" />
          <p>Force Stop</p>
        </button>
        <button>
          <img src={uninstall} alt="" />
          <p>Uninstall</p>
        </button>
      </div>
      <div className="infoButtons">
        <div className="infoCard">
          <img src={storage} alt="" />
          <div className="text">
            <p>Storage</p>
            <p>{app.storage} MB</p>
          </div>
        </div>
        <div className="infoCard">
          <img src={time} alt="" />
          <div className="text">
            <p>Time Used</p>
            <p>{app.usage} hrs</p>
          </div>
        </div>
      </div>
      <div className="parentChart">
        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AppDetail;

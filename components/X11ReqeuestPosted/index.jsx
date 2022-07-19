import { Button, Container } from "@nextui-org/react";
import confetti from "canvas-confetti";
import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X11ReqeuestPosted.css";
import { Button } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";

function X11ReqeuestPosted(props) {
  const { title, login } = props;
  var duration = 3 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 80, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const handleConfetti = () => {
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: 0.5, y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: 0.5, y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };
  return (
    <div className="container-center-horizontal">
      <div className="x11-reqeuest-posted screen">
        <Group />
        <div className="center2 group-8831">
          <h1 className="poppins-medium-daintree-26px">{title}</h1>
        </div>
        <img class="center2" src="/img/logo-1@2x.svg" />
        <Link to="/09-home">
          <div className="group-16">
            <div className="overlap-group">
              <div className="login poppins-medium-white-14px">{login}</div>
            </div>
          </div>
        </Link>
        <body onLoad={handleConfetti()}></body>
        <BarsHomeIndicatorIPhoneLightPortrai />
      </div>
    </div>
  );
}

export default X11ReqeuestPosted;

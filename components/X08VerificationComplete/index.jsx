import React from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import Group from "../Group";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X08VerificationComplete.css";

function X08VerificationComplete(props) {
  const { numberVerifiedSeccessfully, login } = props;
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
      <div className="x08-verification-complete screen">
        <Group />
        <div className="group-8831-1">
          <div className="overlap-group1-2">
            <img className="logo-1-1" src="/img/logo-1-1@2x.svg" />
            <div className="poppins-medium-daintree-26px">
              <span>Number Verified Successfully</span>
            </div>
          </div>
        </div>
        <Link to="/09-home">
          <div className="group-16-1">
            <div className="overlap-group-2">
              <div className="login-3 poppins-medium-white-14px">{login}</div>
            </div>
          </div>
        </Link>
        <BarsHomeIndicatorIPhoneLightPortrai />
      </div>
      <body onLoad={handleConfetti()}></body>
    </div>
  );
}

export default X08VerificationComplete;

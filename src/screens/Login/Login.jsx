import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="frame-110">
        <img className="logo-symbol" alt="Logo symbol" src="/img/logo-symbol-1.svg" />
        <img className="logo-type" alt="Logo type" src="/img/logo-type-1.svg" />
      </div>
      <div className="frame-111">
        <div className="frame-112">
          <div className="text-wrapper-110">Hello 👋</div>
        </div>
        <div className="frame-112">
          <p className="bookswap-is-book">
            <span className="text-wrapper-111">BookSwap</span>
            <span className="text-wrapper-112">
              {" "}
              is Book-Sharing Platform
              <br />
              for KAIST.
            </span>
          </p>
        </div>
        <div className="frame-112">
          <div className="text-wrapper-110">Enjoy it!</div>
        </div>
        <div className="text-wrapper-113">📕📚💚</div>
      </div>
      <div className="frame-113">
        <div className="frame-114">
          <img className="clip-path-group" alt="Clip path group" src="/img/clip-path-group.png" />
          <div className="text-wrapper-114">Sign in with Google</div>
        </div>
      </div>
    </div>
  );
};

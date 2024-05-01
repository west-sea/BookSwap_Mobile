import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Bookshelf = () => {
  return (
    <div className="bookshelf">
      <div className="div-3">
        <div className="frame-16">
          <div className="frame-17">
            <div className="group-5">
              <div className="rectangle-wrapper">
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-13">Home</div>
          </div>
          <div className="frame-17">
            <div className="group-5">
              <div className="rectangle-wrapper">
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-13">Message</div>
          </div>
          <div className="frame-17">
            <div className="group-5">
              <div className="rectangle-wrapper">
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-13">Bookshelf</div>
          </div>
          <div className="frame-17">
            <div className="group-5">
              <div className="rectangle-wrapper">
                <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-13">Profile</div>
          </div>
        </div>
        <div className="text-wrapper-14">Bookshelf</div>
        <div className="frame-18">
          <div className="waiting-wrapper">
            <div className="text-wrapper-15">Waiting&nbsp;&nbsp;0</div>
          </div>
          <div className="finish-wrapper">
            <div className="text-wrapper-15">Finish&nbsp;&nbsp;0</div>
          </div>
        </div>
        <Link to="/upload-1">
          <img className="add-box" alt="Add box" src="/img/add-box.png" />
        </Link>
      </div>
    </div>
  );
};

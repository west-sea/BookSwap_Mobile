import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NotificationScreen = () => {
  return (
    <div className="notification-screen">
      <div className="notification-2">
        <div className="frame-wrapper">
          <div className="frame-34">
            <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-6.png" />
            <div className="frame-35">
              <div className="frame-36">
                <div className="frame-37">
                  <div className="text-wrapper-28">Me Before You</div>
                  <div className="text-wrapper-29">JoJo Moyes</div>
                  <div className="text-wrapper-30">04/06</div>
                </div>
              </div>
              <div className="frame-38">
                <div className="text-wrapper-31">Reservated</div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/notification-1">
          <img className="arrow-back-ios-2" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
        </Link>
        <div className="text-wrapper-32">Request</div>
        <div className="frame-39">
          <div className="frame-40">
            <div className="group-13">
              <div className="overlap-group-5">
                <div className="ellipse-4" />
                <div className="group-14" />
              </div>
            </div>
            <div className="frame-41">
              <div className="text-wrapper-33">Banana</div>
              <div className="text-wrapper-34">5 min ago</div>
            </div>
            <div className="frame-42">
              <div className="text-wrapper-35">Accepted</div>
            </div>
          </div>
          <div className="frame-40">
            <div className="group-13">
              <div className="overlap-group-5">
                <div className="ellipse-4" />
                <div className="group-14" />
              </div>
            </div>
            <div className="frame-41">
              <div className="text-wrapper-33">Starberry</div>
              <div className="text-wrapper-34">20 min ago</div>
            </div>
            <div className="frame-43">
              <div className="text-wrapper-36">Accept</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

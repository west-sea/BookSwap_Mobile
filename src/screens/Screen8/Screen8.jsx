import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="notification-4">
        <div className="notification-5">
          <div className="overlap-6">
            <div className="frame-58">
              <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-6.png" />
              <div className="frame-59">
                <div className="frame-60">
                  <div className="frame-61">
                    <div className="text-wrapper-50">Me Before You</div>
                    <div className="text-wrapper-51">JoJo Moyes</div>
                    <div className="text-wrapper-52">04/06</div>
                  </div>
                </div>
                <div className="frame-62">
                  <div className="text-wrapper-53">1 Requests</div>
                </div>
              </div>
            </div>
          </div>
          <img className="arrow-back-ios-5" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
          <div className="text-wrapper-54">Request</div>
          <div className="frame-63">
            <div className="frame-64">
              <div className="group-21">
                <div className="overlap-group-8">
                  <div className="ellipse-7" />
                  <div className="group-22" />
                </div>
              </div>
              <div className="frame-65">
                <div className="text-wrapper-55">Banana</div>
                <div className="text-wrapper-56">5 min ago</div>
              </div>
              <Link className="frame-66" to="/notification-2">
                <div className="text-wrapper-57">Accept</div>
              </Link>
            </div>
            <div className="frame-64">
              <div className="group-21">
                <div className="overlap-group-8">
                  <div className="ellipse-7" />
                  <div className="group-22" />
                </div>
              </div>
              <div className="frame-65">
                <div className="text-wrapper-55">Starberry</div>
                <div className="text-wrapper-56">20 min ago</div>
              </div>
              <div className="frame-66">
                <div className="text-wrapper-57">Accept</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

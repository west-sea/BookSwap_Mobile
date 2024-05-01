import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MessageInnerScreen = () => {
  return (
    <div className="message-inner-screen">
      <div className="message-inner-wrapper">
        <div className="message-inner-2">
          <div className="overlap-5">
            <div className="frame-48">
              <div className="text-wrapper-41">교환 완료</div>
            </div>
            <div className="frame-49">
              <div className="text-wrapper-41">요청 취소</div>
            </div>
            <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-6.png" />
            <div className="text-wrapper-42">Me Before You</div>
          </div>
          <img className="arrow-back-ios-4" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
          <Link className="frame-50" to="/messageu95inner-1">
            <div className="frame-51" />
            <div className="text-wrapper-43">Send</div>
          </Link>
          <div className="frame-52">
            <div className="frame-53">
              <div className="text-wrapper-44">Hello!</div>
            </div>
            <div className="text-wrapper-45">10:29 PM</div>
          </div>
          <div className="frame-54">
            <div className="group-19">
              <div className="overlap-group-7">
                <div className="ellipse-6" />
                <div className="group-20" />
              </div>
            </div>
            <div className="text-wrapper-46">Banana</div>
          </div>
          <div className="frame-55">
            <div className="frame-53">
              <p className="text-wrapper-44">When do you want to meet?</p>
            </div>
            <div className="text-wrapper-45">10:30 PM</div>
          </div>
          <div className="frame-56">
            <div className="text-wrapper-47">2024. 04. 06.</div>
          </div>
          <div className="frame-57">
            <p className="p">
              <span className="text-wrapper-48">
                Jason accepts Banana’s request.
                <br />
                Schedule on appointment by cha
              </span>
              <span className="text-wrapper-49">t.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

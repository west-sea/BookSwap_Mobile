import React from "react";
import "./style.css";

export const MessageInner = () => {
  return (
    <div className="message-inner">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <div className="text-wrapper">교환 완료</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper">요청 취소</div>
          </div>
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-6.png" />
          <div className="text-wrapper-2">Me Before You</div>
        </div>
        <img className="arrow-back-ios" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-3">Hello!</div>
          </div>
          <div className="text-wrapper-4">10:29 PM</div>
        </div>
        <div className="frame-5">
          <div className="group">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="group-2" />
            </div>
          </div>
          <div className="text-wrapper-5">Banana</div>
        </div>
        <div className="frame-6">
          <div className="frame-4">
            <p className="text-wrapper-3">When do you want to meet?</p>
          </div>
          <div className="text-wrapper-4">10:30 PM</div>
        </div>
        <div className="frame-7">
          <div className="text-wrapper-4">10:31 PM</div>
          <div className="frame-8">
            <div className="text-wrapper-3">Hi Bro</div>
          </div>
        </div>
        <div className="frame-9">
          <div className="text-wrapper-6">2024. 04. 06.</div>
        </div>
        <div className="jason-accepts-banana-wrapper">
          <p className="jason-accepts-banana">
            <span className="span">
              Jason accepts Banana’s request.
              <br />
              Schedule on appointment by cha
            </span>
            <span className="text-wrapper-7">t.</span>
          </p>
        </div>
        <div className="frame-10">
          <div className="frame-11" />
          <div className="text-wrapper-8">Send</div>
        </div>
      </div>
    </div>
  );
};

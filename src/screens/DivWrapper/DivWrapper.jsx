import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="notification-wrapper">
        <div className="notification-3">
          <img className="arrow-back-ios-3" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
          <div className="text-wrapper-37">Notification</div>
          <div className="frame-44">
            <div className="frame-45">
              <div className="group-15">
                <div className="overlap-4">
                  <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-6.png" />
                  <div className="group-16">
                    <div className="overlap-group-6">
                      <div className="ellipse-5" />
                      <div className="group-17" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-46">
                <p className="text-wrapper-38">Banana님이 회원님의 책에 요청을 보냈습니다.</p>
                <div className="text-wrapper-39">5 min ago</div>
              </div>
              <Link className="frame-47" to="/notification-4">
                <div className="text-wrapper-40">요청 보기</div>
              </Link>
            </div>
            <div className="frame-45">
              <div className="group-15">
                <div className="overlap-4">
                  <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-6.png" />
                  <div className="group-16">
                    <div className="overlap-group-6">
                      <div className="ellipse-5" />
                      <div className="group-18" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-46">
                <p className="text-wrapper-38">StarBerry님이 회원님의 책에 요청을 보냈습니다.</p>
                <div className="text-wrapper-39">20 min ago</div>
              </div>
              <div className="frame-47">
                <div className="text-wrapper-40">요청 보기</div>
              </div>
            </div>
            <div className="frame-45">
              <div className="group-15">
                <div className="overlap-4">
                  <div className="rectangle-11" />
                  <div className="group-16">
                    <div className="overlap-group-6">
                      <div className="ellipse-5" />
                      <div className="group-18" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-46">
                <div className="text-wrapper-38">000000님이 회원님의 요청을 수락했습니다.</div>
                <div className="text-wrapper-39">1일 전</div>
              </div>
              <div className="frame-47">
                <div className="text-wrapper-40">메세지 보내기</div>
              </div>
            </div>
            <div className="frame-45">
              <div className="group-15">
                <div className="overlap-4">
                  <div className="rectangle-11" />
                  <div className="group-16">
                    <div className="overlap-group-6">
                      <div className="ellipse-5" />
                      <div className="group-18" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-46">
                <div className="text-wrapper-38">000000님이 회원님의 요청을 거절했습니다.</div>
                <div className="text-wrapper-39">4일 전</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

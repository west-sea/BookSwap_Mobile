import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Notification = () => {
  return (
    <div className="notification">
      <div className="div-2">
        <img className="img" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
        <div className="text-wrapper-9">Notification</div>
        <div className="frame-12">
          <div className="frame-13">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-6.png" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-2" />
                    <div className="group-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-10">Banana님이 메세지를 보냈습니다.</div>
              <div className="text-wrapper-11">10 sec ago</div>
            </div>
            <Link className="frame-15" to="/message">
              <div className="text-wrapper-12">메세지 보기</div>
            </Link>
          </div>
          <div className="frame-13">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-6.png" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-2" />
                    <div className="group-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <p className="text-wrapper-10">Banana님이 회원님의 책에 요청을 보냈습니다.</p>
              <div className="text-wrapper-11">5 min ago</div>
            </div>
            <div className="frame-15">
              <div className="text-wrapper-12">요청 보기</div>
            </div>
          </div>
          <div className="frame-13">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-6.png" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-2" />
                    <div className="group-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <p className="text-wrapper-10">StarBerry님이 회원님의 책에 요청을 보냈습니다.</p>
              <div className="text-wrapper-11">20 min ago</div>
            </div>
            <div className="frame-15">
              <div className="text-wrapper-12">요청 보기</div>
            </div>
          </div>
          <div className="frame-13">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle-3" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-2" />
                    <div className="group-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-10">000000님이 회원님의 요청을 수락했습니다.</div>
              <div className="text-wrapper-11">1일 전</div>
            </div>
            <div className="frame-15">
              <div className="text-wrapper-12">메세지 보내기</div>
            </div>
          </div>
          <div className="frame-13">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle-3" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-2" />
                    <div className="group-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-10">000000님이 회원님의 요청을 거절했습니다.</div>
              <div className="text-wrapper-11">4일 전</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

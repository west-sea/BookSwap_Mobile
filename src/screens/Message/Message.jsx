import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Message = () => {
  return (
    <div className="message">
      <div className="div-4">
        <div className="frame-19">
          <div className="frame-20">
            <div className="group-6">
              <div className="img-wrapper">
                <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-16">Home</div>
          </div>
          <div className="frame-20">
            <div className="group-6">
              <div className="img-wrapper">
                <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-16">Message</div>
          </div>
          <div className="frame-20">
            <div className="group-6">
              <div className="img-wrapper">
                <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-16">Bookshelf</div>
          </div>
          <div className="frame-20">
            <div className="group-6">
              <div className="img-wrapper">
                <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-3-2.svg" />
              </div>
            </div>
            <div className="text-wrapper-16">Profile</div>
          </div>
        </div>
        <div className="text-wrapper-17">Message</div>
        <div className="frame-21">
          <Link className="frame-22" to="/messageu95inner-2">
            <div className="group-7">
              <div className="overlap-3">
                <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-6.png" />
                <div className="group-8">
                  <div className="overlap-group-3">
                    <div className="ellipse-3" />
                    <div className="group-9" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-23">
              <div className="text-wrapper-18">Banana</div>
              <p className="text-wrapper-19">When do you want to meet?</p>
            </div>
            <div className="frame-24">
              <div className="text-wrapper-20">10:30 PM</div>
              <div className="frame-25">
                <div className="text-wrapper-21">2</div>
              </div>
            </div>
          </Link>
          <div className="frame-22">
            <div className="group-7">
              <div className="overlap-3">
                <div className="rectangle-7" />
                <div className="group-8">
                  <div className="overlap-group-3">
                    <div className="ellipse-3" />
                    <div className="group-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-23">
              <div className="text-wrapper-18">Apple</div>
              <p className="text-wrapper-19">Thank you. See u tomorrow</p>
            </div>
            <div className="frame-26">
              <div className="text-wrapper-20">22:20</div>
            </div>
          </div>
          <div className="frame-22">
            <div className="group-7">
              <div className="overlap-3">
                <div className="rectangle-7" />
                <div className="group-8">
                  <div className="overlap-group-3">
                    <div className="ellipse-3" />
                    <div className="group-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-23">
              <div className="text-wrapper-18">Bread</div>
              <div className="text-wrapper-19">Sure!</div>
            </div>
            <div className="text-wrapper-20">08:30</div>
          </div>
          <div className="frame-22">
            <div className="group-7">
              <div className="overlap-3">
                <div className="rectangle-7" />
                <div className="group-8">
                  <div className="overlap-group-3">
                    <div className="ellipse-3" />
                    <div className="group-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-23">
              <div className="text-wrapper-18">FamFamYo</div>
              <div className="text-wrapper-19">Can I ask edition?</div>
            </div>
            <div className="text-wrapper-20">03/29</div>
          </div>
        </div>
      </div>
    </div>
  );
};

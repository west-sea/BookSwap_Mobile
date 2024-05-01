import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const UploadScreen = () => {
  return (
    <div className="upload-screen">
      <div className="upload-2">
        <img className="arrow-back-ios-8" alt="Arrow back ios" src="/img/arrow-back-ios.png" />
        <div className="text-wrapper-81">Upload</div>
        <div className="overlap-group-11">
          <img className="rectangle-16" alt="Rectangle" src="/img/rectangle-6.png" />
          <div className="edit-2">
            <img className="photo-camera-3" alt="Photo camera" src="/img/photo-camera.png" />
          </div>
        </div>
        <div className="frame-79">
          <div className="text-wrapper-82">Title</div>
          <div className="frame-80">
            <div className="text-wrapper-83">Me Before You</div>
          </div>
        </div>
        <div className="text-wrapper-84">Cover</div>
        <div className="frame-81">
          <div className="text-wrapper-82">Author</div>
          <div className="frame-80">
            <div className="text-wrapper-83">JoJo Moyes</div>
          </div>
        </div>
        <div className="text-wrapper-85">Genre</div>
        <div className="text-wrapper-86">Visibility</div>
        <div className="frame-82">
          <div className="frame-83">
            <div className="text-wrapper-87">Major</div>
          </div>
          <div className="frame-84">
            <div className="text-wrapper-87">Novel</div>
          </div>
          <div className="frame-83">
            <div className="text-wrapper-87">Essay</div>
          </div>
          <div className="frame-83">
            <div className="text-wrapper-87">Poetry</div>
          </div>
          <div className="frame-83">
            <div className="text-wrapper-87">Genre</div>
          </div>
          <div className="frame-83">
            <div className="text-wrapper-87">Genre</div>
          </div>
          <div className="frame-83">
            <div className="text-wrapper-87">Genre</div>
          </div>
          <div className="frame-83">
            <div className="text-wrapper-87">Genre</div>
          </div>
        </div>
        <Link className="text-wrapper-88" to="/bookshelf-3">
          OK
        </Link>
        <div className="overlap-8">
          <div className="ellipse-16" />
        </div>
        <div className="ellipse-17" />
        <div className="ellipse-18" />
        <div className="text-wrapper-89">All users</div>
        <div className="text-wrapper-90">Nobody</div>
        <div className="text-wrapper-91">Show to Some users</div>
        <img className="lock-3" alt="Lock" src="/img/lock.png" />
        <img className="person-add-3" alt="Person add" src="/img/person-add.png" />
        <div className="frame-85">
          <div className="ellipse-19" />
          <div className="text-wrapper-92">Hide from Some users</div>
          <img className="person-cancel-3" alt="Person cancel" src="/img/person-cancel.png" />
        </div>
      </div>
    </div>
  );
};

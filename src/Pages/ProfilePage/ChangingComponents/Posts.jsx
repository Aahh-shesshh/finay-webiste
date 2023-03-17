import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillPicture } from "react-icons/ai";
import { BsShare, BsChat, BsFillHeartFill, BsFlag } from "react-icons/bs";


const Posts = () => {
  return (
    <div className="posts min-h-max">

      <div className="status-div">
        <CgProfile className="profile-pic"></CgProfile>
        <p>
          What's on your mind?{" "}
          <span>
            {" "}
            <AiFillPicture className="album" />
          </span>
        </p>
      </div>
      <div className="status-text">
        <div className="hello">
          <CgProfile className="profile-pic-2"></CgProfile>
          <div>
            <h4>Ashish Khatri</h4>
            <h6>10 min ago</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper diam gravida sapien sem elementum amet. Ac in
              pharetra, scelerisque sed euismod.
            </p>
          </div>
        </div>
        <hr />
        <div className="hello">
          <BsFillHeartFill className="heart" />
          <BsChat className="chat1" />
          <BsShare className="share" />
          <BsFlag className="flag" />
        </div>
      </div>
      <div className="status-text">
        <div className="hello">
          <CgProfile className="profile-pic-2"></CgProfile>
          <div>
            <h4>Ashish Khatri</h4>
            <h6>10 min ago</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper diam gravida sapien sem elementum amet. Ac in
              pharetra, scelerisque sed euismod.
            </p>
          </div>
        </div>
        <div className="img-div">
          <img src="images/post-pic.jpg" alt="post"></img>
        </div>
        <hr />
        <div className="hello">
          <BsFillHeartFill className="heart" />
          <BsChat className="chat1" />
          <BsShare className="share" />
          <BsFlag className="flag" />
        </div>
      </div>
      <div className="status-text">
        <div className="hello">
          <CgProfile className="profile-pic-2"></CgProfile>
          <div>
            <h4>Ashish Khatri</h4>
            <h6>10 min ago</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ullamcorper diam gravida sapien sem elementum amet. Ac in
              pharetra, scelerisque sed euismod.
            </p>
          </div>
        </div>
        <div className="img-div">
          <img src="images/post-pic.jpg" alt="post"></img>
        </div>
        <hr />
        <div className="hello">
          <BsFillHeartFill className="heart" />
          <BsChat className="chat1" />
          <BsShare className="share" />
          <BsFlag className="flag" />
        </div>
      </div>
    </div>
  );
};

export default Posts;

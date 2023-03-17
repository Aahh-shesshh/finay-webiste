import React from "react";
import ConstFooter from "../../signuppage/const-leftpage/ConstFooter";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProfileFooter = () => {
  return (
    <div className="main-footer ">
      <div className="profile-footer">
        <div>
          <div className="footer-logo">
            <div className="icon3"></div>
            <div className="icon4"></div>
            <h5>Finay</h5>
          </div>
          <p>
            The only marketplace selling unreleased music, music videos, stems,
            remixes, royalty rights and more as downloadable files packed into
            NFTs
          </p>
        </div>
        <div className="links">
          <a href="akjdhf">
            <h4>Home</h4>
          </a>
          <a href="www.google.com" className="mr-8">
            <h4>Community</h4>
          </a>
          <a href="akjdhf">
            <h4>Explore</h4>
          </a>
          <a href="akjdhf">
            <h4>Contact</h4>
          </a>
          <a href="akjdhf">
            <h4>Terms</h4>
          </a>
          <a href="akjdhf">
            <h4>Privacy</h4>
          </a>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <ConstFooter />
        <div className="socials">
          <a href="ksd">
            {" "}
            <BsLinkedin className="handles" />
          </a>
          <a href="ksd">
            {" "}
            <FaDiscord className="handles" />
          </a>
          <a href="ksd">
            {" "}
            <BsTwitter className="handles" />{" "}
          </a>
          <a href="ksd">
            {" "}
            <AiFillGithub className="handles" />
          </a>
          <a href="ksd">
            {" "}
            <AiOutlineInstagram className="handles" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileFooter;

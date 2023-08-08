import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import ConstFooter from "../../const-leftpage/ConstFooter";

const ProfileFooter = () => {
  return (
    <div className="bg-black flex flex-col py-3 px-8">
      <div className="profile-footer py-2 w-full flex flex-row items-center justify-between">
        <div>
          <div className="footer-logo py-1">
            <div className="icon4 mt-2"></div>
            <div className="icon4"></div>
            <h5>Finay</h5>
          </div>
          <p>
            The only marketplace selling unreleased music, music videos, stems,
            remixes, royalty rights and more as downloadable files packed into
            NFTs
          </p>
        </div>
        <div className="flex flex-row gap-5 links">
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
            <BsLinkedin color="white" size={23} />
          </a>
          <a href="ksd">
            {" "}
            <FaDiscord color="white" size={23} />
          </a>
          <a href="ksd">
            {" "}
            <BsTwitter color="white" size={23} />{" "}
          </a>
          <a href="ksd">
            {" "}
            <AiFillGithub color="white" size={23} />
          </a>
          <a href="ksd">
            {" "}
            <AiOutlineInstagram color="white" size={23} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileFooter;

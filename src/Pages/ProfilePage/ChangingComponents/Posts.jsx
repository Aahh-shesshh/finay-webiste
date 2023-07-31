import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsShare, BsChat, BsHeart, BsFlag } from "react-icons/bs";
import useFetchData from "../../../fetchPosts/useFetchData";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (  
    <div className="status-text">
      <SkeletonTheme baseColor="#4C4F51" highlightColor="#454343">
        <div className="flex flex-row gap-6">
          <Skeleton circle width={50} height={50} />
          <Skeleton width={100} height={40} />
        </div>
        <Skeleton className="ml-[74px]" width={300} height={70} />
      </SkeletonTheme>
    </div>
  );
};

const Posts = () => {
  const res = useFetchData();

  const [posts, setPosts] = useState([]);
  const [activeIconIndex, setActiveIconIndex] = useState(true);

  const activeIcon = () => {
    setActiveIconIndex((prev) => !prev);
  };

  useEffect(() => {
    res.photos && setPosts(res.photos);
  }, [res.photos]);

  return (
    <div className="posts min-h-max">
      <div className="status-div">
        <CgProfile className="profile-pic"></CgProfile>
        <input placeholder="What's on your mind?"></input>
      </div>
      <div className="status-text">
        <div className="hello">
          <CgProfile className="profile-pic-2"></CgProfile>
          <div>
            <h4>{localStorage.getItem("Username")}</h4>
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
          <BsHeart
            className={activeIconIndex ? "active-icon" : "notactive-icon"}
            onClick={activeIcon}
          />
          <BsChat className="notactive-icon" />
          <BsShare className="notactive-icon ml-[250px]" />
          <BsFlag className="notactive-icon" />
        </div>
      </div>
      <br />
      {posts.length === 0 && (
        <div>
          <Loading />
        </div>
      )}
      {posts.map((post, postkey) => {
        return (
          <div className="status-text" key={postkey}>
            <div className="hello">
              <CgProfile className="profile-pic-2"></CgProfile>
              <div>
                <h4>{localStorage.getItem("Username")}</h4>
                <h6>10 min ago</h6>
                <p>{post.description}</p>
              </div>
            </div>
            <div className="img-div">
              <img src={post.url} alt="post"></img>
            </div>
            <hr />
            <div className="hello">
              <BsHeart
                className={activeIconIndex ? "active-icon" : "notactive-icon"}
                onClick={activeIcon}
              />
              <BsChat className="notactive-icon" />
              <BsShare className="notactive-icon ml-[250px]" />
              <BsFlag className="notactive-icon" />
            </div>
          </div>
        );
      })}

      <br />
    </div>
  );
};

export default Posts;

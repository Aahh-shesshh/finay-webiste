import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsShare, BsChat, BsHeart, BsFlag } from "react-icons/bs";
import useFetchData from "../../../fetchPosts/useFetchData";


const Posts = () => {
  const res = useFetchData();
console.log(res.photos);
  const [posts, setPosts] = useState([]);
  const [activeIconIndex, setActiveIconIndex] = useState(true);

  const activeIcon = () =>{
    setActiveIconIndex((prev)=>!prev)
  }

  useEffect(()=>{
    res.photos && setPosts(res.photos) 
  }, [res.photos])

  return (
    <div className="posts min-h-max">

      <div className="status-div">
        <CgProfile className="profile-pic"></CgProfile>
        <input placeholder="What's on your mind?">
          
          
        </input>
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
          <BsHeart className={activeIconIndex ? "active-icon" : "notactive-icon"} onClick={activeIcon}/>
          <BsChat className="notactive-icon" />
          <BsShare className="notactive-icon ml-[250px]" />
          <BsFlag className="notactive-icon" />
        </div>
      </div>
      {posts.map((post, postkey)=>{
        return(
          <div className="status-text" key={postkey}>
            <div className="hello">
            <CgProfile className="profile-pic-2"></CgProfile>
            <div>
            <h4>{localStorage.getItem("Username")}</h4>
            <h6>10 min ago</h6>
            <p>
             {post.description}
            </p>
          </div>
              </div>
              <div className="img-div">
          <img src={post.url} alt="post"></img>
        </div>
        <hr />
        <div className="hello">
          <BsHeart className={activeIconIndex ? "active-icon" : "notactive-icon"}  onClick={activeIcon}/>
          <BsChat className="notactive-icon" />
          <BsShare className="notactive-icon ml-[250px]" />
          <BsFlag className="notactive-icon" />
        </div>
            </div>
        )
      })}
      
     
      <br />
    </div>
  );
};

export default Posts;

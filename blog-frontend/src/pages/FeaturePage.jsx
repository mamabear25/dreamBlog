import React from "react";
import Edit from "../img/editblog.png";
import Delete from "../img/deleteblog.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu"
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const FeaturePage = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/feature/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[postId]);

  const handleDelete = async () => {
    try{
      await axios.delete(`/feature/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  // const handleEdit = async () => {
  //   try{
  //     const res = await axios.put(`/posts/${postId}`);
  //     setPost(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
      <h1 className="subhead">{post.title}</h1>
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && 
            <img src={post.userImg} alt="" />
          }
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
             <div className="edit">
            <Link  to={`/write?edit=1`} state={post}>
              <img src={Edit} alt=""/>
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>
          )}
        </div>
        <h2>{post.title}</h2>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
}
  
export default FeaturePage;
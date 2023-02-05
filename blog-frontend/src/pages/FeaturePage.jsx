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
    <div className="single p-40 bg-gray-200 py-8 w-screen gap-20 flex mt-10">
      <div className="content">
        <img className="w-full object-cover rounded-lg" src={`../upload/${post?.img}`} alt="" />
        <div className="user flex items-center my-4">
          <Link to={"/profile"}>
            {post.userImg && 
              <img className="w-16 h-16 rounded-full mr-4 object-cover" src={post.userImg} alt="" />
            }
          </Link>
          <div className="text-gray-700">
            <span className="font-medium">{post.username}</span>
            <p className="text-sm">Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
          <div className="edit flex">
            <Link  to={`/write?edit=1`} state={post}>
              <img className="w-12 h-12" src={Edit} alt=""/>
            </Link>
            <img className="w-12 h-12"  onClick={handleDelete} src={Delete} alt="" />
          </div>
          )}
        </div>
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
}
  
export default FeaturePage;
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {

  const [posts, setPosts] = useState([]);
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[cat]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
      <div className="menu w-1/2">
          <h1 className="text-lg font-medium">Recommended posts</h1>
          {currentPosts.map((post) => (
              <div className="my-4" key={post.id}>
                  <img className="w-full object-cover rounded-lg" src={`../upload/${post?.img}`} alt="" />
                  <h2 className="text-xl font-medium">{post.title}</h2>
                  <br/>
                  <Link className="p-2 text-gray-200 bg-pink-900 hover:text-white font-medium py-2 rounded-lg my-2" to={`/post/${post.id}`}>Read More</Link>
              </div>
          ))}
      </div>
  )
}
  




export default Menu;
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="menu">
          <h1>Recommended posts</h1>
          {currentPosts.map((post) => (
              <div className="post" key={post.id}>
                  <img src={`../upload/${post?.img}`} alt="" />
                  <h2>{post.title}</h2>
                  <button>Read More</button>
              </div>
          ))}
      </div>
  )
}
  
export default Menu;
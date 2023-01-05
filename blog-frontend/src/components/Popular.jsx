import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Popular = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[]);

  return (
      <div className="popular">
          <h1>Popular Posts</h1>
          {posts.map((post) => (
              <div className="poppost" key={post.id}>
                  <img src={`../upload/${post?.img}`} alt="" />
                  <h2>{post.title}</h2>
              </div>
          ))}
      </div>
  )
}
  
export default Popular;
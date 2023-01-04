import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  // you cannot create an async function with use effect
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[cat]);

  return (
    <div className="bloghome">
      <div className="blogposts">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
  
export default Home;


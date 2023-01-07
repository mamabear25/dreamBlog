import React from "react";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";

const Home = () => {
  // you cannot create an async function with use effect
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);

  const cat = useLocation().search

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
  },[cat]);

  // Pagination

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="bloghome">
      <div className="blogposts">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
  
export default Home;


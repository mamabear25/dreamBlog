import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popular = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/popular`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[]);

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html")
  //   return doc.body.textContent
  // }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


  return (
      <div className="popular">
          <h1>Popular Posts</h1>
          {currentPosts.map((post) => (
            <Link className="link" to={`/popular/${post.id}`}>
              <div className="poppost" key={post.id}>
                  <img src={`../upload/${post?.img}`} alt="" />
                  <h2>{post.title}</h2>
              </div>
            </Link>
          ))}
      </div>
  )
}
  
export default Popular;
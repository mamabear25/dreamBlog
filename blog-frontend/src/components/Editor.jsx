import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Editor = () => {
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

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="epopular">
        <h1>Good Read</h1>
        {currentPosts.map((pop) => (
          <div className="epoppost" key={pop.id}>
            <Link className="link" to={`/popular/${pop.id}`}>
              <div>
                <h4>{pop.title.slice(0.10)}...</h4>
                <p>{getText(pop.desc.slice(0, 130))}...</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
  
export default Editor;
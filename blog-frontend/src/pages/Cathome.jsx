import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Popular from "../components/Popular";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";


const Cars = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);

  const cat = useLocation().search

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

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

  // Pagination

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div className="catContainer">
      <div className="cat">
        <div className="try">
          <div className="catMain">
            {currentPosts.map((cat) => (
              <div className="catMini">
                <div className="catContent">
                  <h4>{cat.title.slice(0, 20)}...</h4>
                  <p>{getText(cat.desc.slice(0, 110))}...</p>
                </div>
                <div className="catPost" key={cat.id}>
                  <Link to={`/post/${cat.id}`}>
                    <img src={`../upload/${cat?.img}`} alt="" className="img"/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="catPop">
          <Popular />
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Cars;

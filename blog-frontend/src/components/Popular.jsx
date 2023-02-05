import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';


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
    <div class="bg-white h-screen p-2 overflow-y-auto animate__animated animate__slideInRight animate__delay-2s">
      <div class="px-4 py-2">
          <h1 class="text-lg font-medium">Popular Posts</h1>
      </div>
      <div class="grid grid-cols-1 gap-4">
        {currentPosts.map((post) => (
          <Link class="text-pink-900 font-medium" to={`/popular/${post.id}`}>
            <div class="py-4" key={post.id}>
              <img class="h-20 w-20 object-cover object-center rounded-lg" src={`../upload/${post?.img}`} alt="" />
              <div class="p-2">
                  <h2 class="text-lg font-medium">{post.title.slice(0, 15)}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
 
  
export default Popular;



 
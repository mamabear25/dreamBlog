import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';


const Editor = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(8);

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
    <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
      <div class="w-full bg-white">
        <div class="mb-6">
          <div class="p-4 bg-gray-900">
            <h2 class="text-lg text-white font-bold">Most Popular</h2>
          </div>
          {currentPosts.map((pop) => (
          <ul class="post-number">
            <li class="border-b border-gray-100 hover:bg-gray-300" key={pop.id}>
              <Link to={`popular/${pop.id}`} class="text-lg font-bold px-6 py-3 flex flex-row items-center">{pop.title}</Link>
            </li>
            
          </ul>
          ))}
        </div>
      </div>

      <div class="text-sm py-6 sticky top-0 bg-gray-900">
        <div class="w-full text-center">
        <a href="https://www.altschoolafrica.com/" class="uppercase text-white" target="_blank">Advertisement
          <img class="mx-auto" src="https://media.licdn.com/dms/image/C4D22AQGtj0P9GuJDJA/feedshare-shrink_800/0/1672732079962?e=2147483647&v=beta&t=6aVlG6_4UD5xyrf8QUop5Uke7oWEJpYXoqZlte1_OPY" alt="advertisement area" />
        </a>
        </div>
      </div>
    </div>
  )
}
  
export default Editor;
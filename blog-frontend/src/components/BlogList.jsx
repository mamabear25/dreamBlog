import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Editor from "./Editor";
import Feat from "./Feat";

const Home = () => {
  // you cannot create an async function with use effect
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(18);

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

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  // Pagination

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div class="bg-gray-50 py-6">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-2xl font-bold">
                <span class="inline-block h-5 border-l-3 border-pink-700 mr-2"></span>Latest Posts
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              <div class="flex-shrink max-w-full w-full px-3 pb-5">
                <div class="relative hover-img max-h-98 overflow-hidden">
                  <Feat />
                  <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    <h2 class="text-3xl font-bold capitalize text-white mb-3">DreamBlog special feature</h2>
                    <p class="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>                                                  
                  </div>
                </div>
              </div>
              {currentPosts.map((post) => (
              <Link class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100" to={`/post/${post.id}`}>
                <div class="flex flex-row sm:block hover-img" key={post.id}>
                    <img class="max-w-full w-full mx-auto" src={`../upload/${post?.img}`} alt="alt title" />
                  <div class="py-0 sm:py-3 pl-3 sm:pl-0" key={post.id}>
                    <h3 class="text-lg font-bold leading-tight mb-2">
                      {post.title}
                    </h3>
                    <p class="hidden md:block text-gray-600 leading-tight mb-1">{getText(post.desc.slice(0,60))}</p>
                    <p class="text-gray-500"><span class="inline-block h-3 border-l-2 border-pink-700 mr-2"></span>{post.cat}</p>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
          <Editor />
        </div>
      </div>
    </div>
  )
}

export default Home;
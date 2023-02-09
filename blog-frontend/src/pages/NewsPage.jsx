import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu"
import { useState, useEffect } from "react";
import axios from "axios";


const NewsPage = (props) => {
  const [post, setPost] = useState({});
//   const postId = props.match.params.id;


  const location = useLocation();
  const navigate = useNavigate();


  const postId = location.pathname.split("/")[1];


  useEffect(() => {
    if(!postId) return
    const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7bb9cf1ad9f34a1cbf21c73912b80e7c',
    };

    axios.request(options)
        .then(response => {
            const articles = response.data.articles;
            const selectedArticle = articles.find(article => article.id === postId);
            setPost(selectedArticle);
        })
        .catch(error => {
            console.error(error);
        });
}, [postId]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single p-40 bg-gray-200 py-8 w-screen gap-20 flex mt-20">
      <div className="content">
        <img className="w-full lg:h-80 object-cover rounded-lg" src={`../upload/${post?.img}`} alt="" />
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>

  );
}
  
export default NewsPage;
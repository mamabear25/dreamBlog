import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiKey = process.env.API_KEY;
      const options = {
          method: 'GET',
          url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      };

      axios.request(options)
          .then(response => {
              setPosts(response.data.articles.slice(0,3));
          })
          .catch(error => {
              console.error(error);
          });
  }, []);
  
  return (
    <div className="relative bg-gray-50" style={{backgroundImage: "url('src/img/bg.jpg')",backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed"}}>
  <div className="bg-black bg-opacity-70">
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
          <div className="w-full ">
            <h2 className="text-white text-2xl font-bold text-shadow-black">
              <span className="inline-block h-5 border-l-3 border-pink-800 mr-2"></span>BREAKING
            </h2>
          </div>
          <div id="post-carousel" className="flex overflow-x-scroll">
            {posts.map((post, index) => (
            <div className="w-1/3 px-2" key={index}>
                <img src={post.urlToImage} alt="news-image" style={{height:"250px"}}/>
                <p className="text-white font-bold text-shadow-black">
              <span className="inline-block h-2 border-l-3 border-pink-800 mr-2"></span>{post.title}
            </p>
            </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  </div>
</div>             
  );
}

  
export default Weather;



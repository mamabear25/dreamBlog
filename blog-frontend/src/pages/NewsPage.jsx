import { useParams } from "react-router-dom";
import Menu from "../components/Menu"
import React, { useState, useEffect } from "react";
import axios from "axios";


const NewsPage = () => {
  const [post, setPost] = useState({});
  const { slug } = useParams();

    
    useEffect(() => {
      const apiKey = "BdQ6UoCeueMo6AocgE4wB0tfIOf3qKvI";
      const url = `https://api.nytimes.com/svc/topstories/v2/world.json?fq=slug_name:"${slug}"&api-key=${apiKey}`;

      if(!slug) return
      
      axios.get(url)
      .then(response => {
        const article = response.data.results[0];
        setPost({
          title: article.title,
          abstract: article.abstract,
          img: article.multimedia?.[0]?.url,
          publishedDate: article.published_date,
        });
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [slug]);


  return (
    <div className="single p-40 bg-gray-200 py-8 w-screen gap-20 flex mt-20">
      <div className="content">
        <img className="w-full lg:h-80 object-cover rounded-lg" src={post.img} alt="" />
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.desc}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>

  );
}
  
export default NewsPage;


// import React from "react";
// import { useParams } from "react-router-dom";
// import Menu from "../components/Menu"
// import { useState, useEffect } from "react";
// import axios from "axios";


// const NewsPage = () => {
//   const [post, setPost] = useState(null);
//   const { id } = useParams();
    
//   useEffect(() => {
//     const apiKey = "BdQ6UoCeueMo6AocgE4wB0tfIOf3qKvI";
//     const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=slug_name:("${id}")&api-key=${apiKey}`;

//     if(!id) return
    
//     axios.get(url)
//     .then(response => {
//       const article = response.data.response.docs[0];
//       console.log('article:', article);

//       setPost({
//         id: article._id,
//         title: article.healine.title,
//         abstract: article.abstract,
//         thumbnail: article.multimedia?.[0]?.url,
//         publishedDate: article.pub_date,
//       });
//     })
//   .catch(error => {
//       console.error(error);
//   });
  
//   }, [id]);


//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="single p-40 bg-gray-200 py-8 w-screen gap-20 flex mt-20">
//       <div className="content">
//         <img className="w-full lg:h-80 object-cover rounded-lg" src={post.img} alt="" />
//         <h1 className="text-xl font-bold">{post.title}</h1>
//         <p className="text-gray-700 leading-relaxed">{post.desc}</p>
//       </div>
//       <Menu cat={post.cat}/>
//     </div>

//   );
// }
  
// export default NewsPage;
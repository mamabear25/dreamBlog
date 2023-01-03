import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  // you cannot create an async function with use effect
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

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

  // const posts = [
  //   {
  //     id: 1,
  //     username: "Jane Doe",
  //     userImg: "",
  //     title: "Mercedez 2091",
  //     desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
  //     img: "https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
  //   },
  //   {
  //     id: 2,
  //     username: "John Doe",
  //     userImg: "",
  //     title: "Antioxidants",
  //     desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring",
  //     img: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"
  //   },
  //   {
  //     id: 3,
  //     username: "Chi Doe",
  //     userImg: "",
  //     title: "Peace in travels",
  //     desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
  //     img: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/w5tyj7axkmo24e6c0txq"
  //   },
  //   {
  //     id: 4,
  //     username: "Larry Doe",
  //     userImg: "",
  //     title: "Tech advancement",
  //     desc: "lorem ipsum dolor sit amet for  lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringwhateber freason we hav to write this, it;s tiring.",
  //     img: "https://dxc.scene7.com/is/image/dxc/AdobeStock_432104398-6?qlt=90&wid=1200&ts=1669901329429&$landscape_desktop$&dpr=off"
  //   },
  //   {
  //     id: 5,
  //     username: "Jerry Doe",
  //     userImg: "",
  //     title: "Bullish Candle",
  //     desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
  //     img: "https://www.esri.com/about/newsroom/wp-content/uploads/2022/03/is-spatial-finance-coming-to-your-company-wherenext-article-wide-1920x1080-1.jpg"
  //   },
  //   {
  //     id: 6,
  //     username: "Tabby Doe",
  //     userImg: "",
  //     title: "Carers and givers",
  //     desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
  //     img: "https://t3.ftcdn.net/jpg/00/55/71/28/360_F_55712895_L3TX88fJMN40pZ5cvrpfswyIaQRizbsA.jpg"
  //   },
  //   {
  //     id: 7,
  //     username: "Danny Doe",
  //     userImg: "",
  //     title: "UK Politics",
  //     desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
  //     img: "https://images.theconversation.com/files/491493/original/file-20221024-11269-sj65de.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
  //   },
  //   {
  //     id: 8,
  //     username: "Icon Doe",
  //     userImg: "",
  //     title: "Healthy Living",
  //     desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
  //     img: "https://blogs.bcm.edu/wp-content/uploads/2018/09/balance-beach-exercise-lifestyle.png"
  //   },
  // ]

  return (
    <div className="bloghome">
      <div className="blogposts">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
  
export default Home;


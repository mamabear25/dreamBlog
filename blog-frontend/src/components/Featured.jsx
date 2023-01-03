import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {

  const posts = [
    {
      id: 1,
      username: "Jane Doe",
      title: "Tribesmen of Kudutangranfhwe",
      desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.lorem ipsum dolor sit amet for  whateber freason we we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason lorem ipsum dolor sit amet for  whateber freason we",
      img: "https://images.pexels.com/photos/2016121/pexels-photo-2016121.jpeg?cs=srgb&dl=pexels-faris-munandar-2016121.jpg&fm=jpg"
    },
    ];

  return (
    <div className="featured">
      <div className="featuredpost">
        <p className="header">SPECIAL FEATURE - Tribesmen of Kudutangranfhwe</p>
        {posts.map((post) => (
        <div className="feat" key={post.id}>
            <p className="text">{post.desc}</p>
            <Link>
            <img src={post.img} alt="" />
            </Link>
            <p className="text">{post.desc}</p>
        </div>
        ))}
      </div>
    </div>
  );
}
  
export default Featured;

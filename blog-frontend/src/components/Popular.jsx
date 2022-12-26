import React from "react";

const Popular = () => {

    const posts = [
        {
          id: 1,
          title: "Mercedez new beast",
          // desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
          img: "https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "Earth Flavours",
          // desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
          img: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"
        },
        {
          id: 3,
          title: "Holidays",
          // desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
          img: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/w5tyj7axkmo24e6c0txq"
        },
        {
          id: 4,
          title: "Cyber security",
          // desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
          img: "https://dxc.scene7.com/is/image/dxc/AdobeStock_432104398-6?qlt=90&wid=1200&ts=1669901329429&$landscape_desktop$&dpr=off"
        },
        {
          id: 5,
          title: "Stylish ladies",
          // desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
          img: "https://www.tastefulspace.com/wp-content/uploads/2019/10/nigerian-fashion.jpg"
        },
        {
          id: 6,
          title: "Health challenges",
          // desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
          img: "https://t3.ftcdn.net/jpg/00/55/71/28/360_F_55712895_L3TX88fJMN40pZ5cvrpfswyIaQRizbsA.jpg"
        },
    ];

    return (
        <div className="popular">
            <h1>Popular Posts</h1>
            {posts.map((post) => (
                <div className="poppost" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                </div>
            ))}
        </div>
    )
}
  
export default Popular;
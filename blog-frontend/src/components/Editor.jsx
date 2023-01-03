import React from "react";

const Editor = () => {

    const posts = [
        {
          id: 1,
          title: "Mercedez new beast",
          desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
        //   img: "https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
        },
        {
          id: 2,
          title: "Earth Flavours",
          desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
        //   img: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"
        },
        {
          id: 3,
          title: "Holidays",
          desc: "lorem ipsum dolor sit amet for lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring whateber freason we hav to write this, it;s tiring.",
        //   img: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/w5tyj7axkmo24e6c0txq"
        },
        {
          id: 4,
          title: "Cyber security",
          desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiringlorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring",
        //   img: "https://dxc.scene7.com/is/image/dxc/AdobeStock_432104398-6?qlt=90&wid=1200&ts=1669901329429&$landscape_desktop$&dpr=off"
        },
    ];

    return (
        <div className="epopular">
            <h1>Good Read</h1>
            {posts.map((post) => (
                <div className="epoppost" key={post.id}>
                    <img src={post.title} alt="" />
                    <p>{post.desc}</p>
                </div>
            ))}
        </div>
    )
}
  
export default Editor;
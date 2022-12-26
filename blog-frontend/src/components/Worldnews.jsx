import React from "react";
import { Link } from "react-router-dom";

const Worldnews = () => {

  const posts = [
    {
        id: 1,
        title: "Ukrainian crisis",
        desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
        img: "https://s.abcnews.com/images/Health/refugee-children-01-ap-iwb-220302_1646239533222_hpMain_16x9_1600.jpg"
    },
    {
        id: 2,
        title: "Paris Riots",
        desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
        img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/23/21/french-protest2.jpg?quality=75&width=982&height=726&auto=webp"
    },
    {
        id: 3,
        title: "Injured Police Men",
        desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
        img: "https://i.guim.co.uk/img/media/a5f7c02f0cfb71a21385325759669a2933ce2df8/186_259_2977_1786/master/2977.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=91e1b198149f8dc761f7469f2fcb5fd8"
    },
    {
      id: 4,
      title: "Iraninan Dictatorship",
      desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
      img: "https://www.ncr-iran.org/en/wp-content/uploads/2019/03/Human_Rights_Situation_in_Iran.jpg"
    },
    {
        id: 5,
        title: "Mexican Human rights",
        desc: "lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring lorem ipsum dolor sit amet for  whateber freason we hav to write this, it;s tiring.",
        img: "https://static01.nyt.com/images/2022/08/03/world/03mexico-corruption-top/03mexico-corruption-top-mediumSquareAt3X.jpg"
    },
    ];

  return (
    <div className="world">
        <p className="worldheader">World News</p>
        <div className="worldpost">
            {posts.map((post) => (
            <div className="worldfeat" key={post.id}>
                <Link className="linker">
                    <div>
                        <h4 className="worldtitle">{post.title}</h4>
                    </div>
                    <div>
                        <p className="worldtitle">{post.desc}</p> 
                    </div>
                    <img src={post.img} alt="" />
                </Link> 
            </div>
            ))}
        </div>
    </div>
  );
}
  
export default Worldnews;
<div>
                <p className="worldheader">POLITICS TODAY</p>
            </div>
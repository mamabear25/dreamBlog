import React from "react";
import {Link} from "react-router-dom"
import "../styles/home.scss";


const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Title 1 lorem ipsum dolor sit amet consectur",
            desc: "just a little something to describe the article you're writing, whatever, blobblob blob Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            img: "https://i.pinimg.com/originals/8e/e1/be/8ee1be6d5a44b409f62c4e09f9bc9c11.jpg"
        },
        {
            id: 1,
            title: "Title 1 lorem ipsum dolor sit amet consectur",
            desc: "just a little something to describe the article Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged you're writing, whatever, blobblob blob",
            img: "https://i.pinimg.com/originals/c4/4d/f7/c44df7a313decfa8ff29ba9c19f80f5f.jpg"
        },
        {
            id: 2,
            title: "Title 2 lorem ipsum dolor sit amet consectur",
            desc: "just a little something to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged describe the article you're writing, whatever, blobblob blob",
            img: "https://i.pinimg.com/originals/ff/09/9c/ff099c8d7b1f203ad552e78c381d1db3.jpg"
        },
        {
            id: 3,
            title: "Title 3 lorem ipsum dolor sit amet consectur",
            desc: "just a little something Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged to describe the article you're writing, whatever, blobblob blob",
            img: "https://i.pinimg.com/550x/26/48/9d/26489dd857969f9eb7dc76cbeac32333.jpg"
        },
        {
            id: 4,
            title: "Title 4 lorem ipsum dolor sit amet consectur",
            desc: "just a little something to describe  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedthe article you're writing, whatever, blobblob blob",
            img: "https://image.winudf.com/v2/image1/Y29tLmtoYXNhYXBwLmJlYXV0aWZ1bGRlc3RpbmF0aW9uc19zY3JlZW5fMF8xNTYzNDI3OTQ5XzA3OA/screen-0.jpg?fakeurl=1&type=.webp"
        },
        {
            id: 5,
            title: "Title 5 lorem ipsum dolor sit amet consectur",
            desc: "just a little something to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangeddescribe the article you're writing, whatever, blobblob blob",
            img: "https://p.favim.com/orig/2018/08/26/indonesia-beautiful-destinations-ubud-Favim.com-6208413.jpg"
        }
    ];
    return (
        <div className="home">
            <div className="container">
                <div className="posts">
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
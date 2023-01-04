import { Link } from 'react-router-dom';

const BlogCard = ({post}) => {

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
      
    return (
        <div className="blogcontainer">
            <div className="postcontainer">
                <Link className="imagecontainer" to={`/post/${post.id}`} >
                    <img src={`../upload/${post?.img}`} alt="" className="img"/>
                </Link>
            </div>
            <div className="postcon">
                <div className='zoom'>
                    <Link className="link" to={`/post/${post.id}`}>
                        <h4>{post.title}</h4>
                        <p>{getText(post.desc.slice(0, 200))}...</p>
                        <div className="flex">
                            {post.userImg && 
                              <img src={post.userImg} alt="" />
                            }
                            <p>{post.username} || 26th Dec, 2022</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;



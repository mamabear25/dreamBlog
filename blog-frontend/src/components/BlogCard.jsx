import { Link } from 'react-router-dom';

const BlogCard = ({post}) => {
    return (
        <div className="blogcontainer">
            <div className="postcontainer">
                <Link className="imagecontainer" to={`/post/${post.id}`} >
                    <img src={post.img} alt="" className="img"/>
                </Link>
            </div>
            <div className="postcon">
                <div className='zoom'>
                    <Link className="link" to={`/post/${post.id}`}>
                        <h4>{post.title}</h4>
                        <p>{post.desc.slice(0, 200)}...</p>
                        <div className="flex">
                        <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"  width="20px" height="20px"  alt="" />
                            <p>{post.username} || 26th Dec, 2022</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;



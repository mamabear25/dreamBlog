import React from "react";
import { Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/feature`);
        setFeatured(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[]);
  
  return (
    <div className="featured">
      <div className="featuredpost">
        <p className="header">SPECIAL FEATURE - {featured.title}</p>
        <div className="feat">
            <Link to={`/feature/${featured.id}`}>
              <div className="imageContainerr">
                <img src={`../upload/${featured?.img}`} alt="" />
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
  
export default Featured;

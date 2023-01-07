import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = () => {
  const [feature, setFeatured] = useState({});

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
      <div key={feature.id} className="featuredpost">
        <p className="header">SPECIAL FEATURE - {feature.title}</p>
        <div className="feat">
          <div className="imageContainerr">
            <Link className="link" to={`feature/${feature.id}`}>
              <img src={`../upload/${feature?.img}`} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

  
export default Featured;



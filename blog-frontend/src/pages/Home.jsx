import React from "react";
import BlogList from "../components/BlogList";
import Popular from "../components/Popular";
import Editor from "../components/Editor";
import Featured from "../components/Featured";
import Worldnews from "../components/Worldnews";

export default function Home ({blogList}) {

return (
  <div>
    <div className="maincontainer">
      <div className="homecontainer">
        <Featured />
        <BlogList blogList={blogList} />
      </div>
      <div className="editor">
        <Editor />
      </div>
      <div className="homecontainer">
        <Popular />
      </div>
    </div>
    <Worldnews />
  </div>
);
}
  
  
import React from "react";
import BlogList from "../components/BlogList";
import Popular from "../components/Popular";
import Editor from "../components/Editor";
import Weather from "../components/Weather";
import Worldnews from "../components/Worldnews";
import Featured from "../components/Featured"

export default function Home () {

return (
  <div className="w-screen">
      <Weather />
          <div className="">
            {/* <Featured /> */}
            <BlogList />
          </div>
          <Weather />
      <Worldnews />
  </div>

);
}
  
  
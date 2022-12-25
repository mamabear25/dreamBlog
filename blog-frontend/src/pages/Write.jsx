import React  from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState("");

  return (
    <div className="create">
      <div className="content">
        <input type="text" placeholder="title"/>
        <div className="editorQuill">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Draft</b></span>
          <input style={{display: "none"}}type="file" name="" id="file"/>
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="cars" id="cars"/>
            <label htmlFor="cars">Cars</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="tech" id="tech"/>
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food"/>
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="travel" id="travel"/>
            <label htmlFor="travel">Travel</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="lifestyle" id="lifestyle"/>
            <label htmlFor="lifestyle">Lifestyle</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="health" id="health"/>
            <label htmlFor="health">Health/Fitness</label>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  export default Write;
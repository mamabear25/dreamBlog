import React  from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState( state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data

    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const imgUrl = await upload();
    try{
      state? await axios.put(`/posts/${state.id}`, {
        title, 
        desc:value, 
        cat, 
        img:file ? imgUrl : ""
      }) :
      await axios.post(`/posts/`, {
        title, 
        desc:value, 
        cat, 
        img:file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/")

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="create px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted flex justify-center items-center h-screen">
      <div className="content w-3/4">
        <input className="bg-white header focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        <div className="editorQuill">
          <ReactQuill className="editor" 
          theme="snow" 
          value={value} 
          onChange={setValue} />
        </div>
      </div>
      <div className="content ml-10 w-2/4 border px-3 py-3 mt-8">
        <div className="item mb-5 border px-3 py-3">
          <input style={{display: "none"}}type="file" name="" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label className="file cursor-pointer" htmlFor="file">Upload Image</label>
          <div className="buttons flex justify-between">
            <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">Draft</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item text-gray-900 font-bold">
          <h1 className="text-lg h-10 text-pink-900">Category</h1>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "cars"} name="cat" value="cars" id="cars" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="cars">Cars</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "tech"} name="cat" value="tech" id="tech" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "travel"} name="cat" value="travel" id="travel" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="travel">Travel</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "finance"} name="cat" value="finance" id="finance" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="finance">Finance</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "politics"} name="cat" value="politics" id="travel" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="travel">Politics</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "lifestyle"} name="cat" value="lifestyle" id="lifestyle" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="lifestyle">Lifestyle</label>
          </div>
          <div className="cat h-10">
            <input className="mr-2" type="radio" checked={cat === "health"} name="cat" value="health" id="health" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="health">Health/Fitness</label>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  export default Write;


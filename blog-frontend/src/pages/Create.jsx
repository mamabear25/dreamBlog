import React from "react";
import ReactQuill from "react-quill"
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "../styles/create.scss"

const Create = () => {
    const [value, setValue] = useState("");
    console.log(value)
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" />
                <div className="editContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status:</b> Draft
                    </span>
                    <span>
                        <b>Visibility:</b> Public
                    </span>
                    <input style={{display: "none"}} type="file" name="" id="file"/>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="art" id="art" />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="politics" id="politics" />
                        <label htmlFor="politics">Politics</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="diy" id="diy" />
                        <label htmlFor="diy">Diy</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="music" id="music" />
                        <label htmlFor="music">Music</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="travel" id="travel" />
                        <label htmlFor="travel">Travel</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="science" id="science" />
                        <label htmlFor="science">Science</label>
                    </div> 
                </div>         
            </div> 
        </div>  
    )
}

export default Create
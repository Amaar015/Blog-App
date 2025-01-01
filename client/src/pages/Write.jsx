import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [cat, setCat] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Published</h1>
          <span>
            <b>Status</b> Draft
          </span>
          <span>
            <b>Visibility</b>Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>save as draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              value="art"
              id="art"
              name="cat"
              checked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              value="science"
              id="science"
              name="cat"
              checked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              value="technology"
              id="technology"
              name="cat"
              checked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              value="cinema"
              id="cinema"
              name="cat"
              checked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              value="design"
              id="design"
              name="cat"
              checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              value="food"
              id="food"
              name="cat"
              checked={cat === "food"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

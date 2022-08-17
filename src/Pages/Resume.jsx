import React from "react";
import { saveAs } from "file-saver";
import "./Page.css";

const Resume = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1Zmfzs9XJc8ZzGrwX_mIqtNcyNI9Uyzj7/view?usp=sharing",
      "Niraj Resume.pdf"
    );
  };
  return (
    <div className="btn">
      <button onClick={saveFile}>Download CV</button>
    </div>
  );
};

export default Resume;

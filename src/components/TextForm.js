import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("you have clicked on handle Click");
    props.showAlert("converted to upper case", "success");
  };
  const handleLoClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
    // setText("you have clicked on handle Click");
  };
  const handleOnChange = (event) => {
    // console.log("onchnege");
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    var text2 = document.getElementById("myBox");
    // console.log(text2);
    text2.select();
    // text.select();
    // text2.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text2.value);
    props.showAlert("Text Copied", "success");
  };
  const handExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed", "success");
  };
  // const [text, setText] = useState("Enter SOme Text");
  const [text, setText] = useState("");
  //   text = "new text"; //worng way
  //   setText("dfsadsaf"); correct way
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "042743",
          }}
        >
          <textarea
            id="myBox"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 " onClick={handExtraSpaces}>
          Remove Extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} 452343 charecters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box"}</p>
      </div>
    </>
  );
}

import React from "react";
import { useState } from "react";
function Textforms(props) {
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success")

  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text is cleared!","success")

  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  //setText=("new text");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            style={{
              backgroundColor: props.mode==='dark'?'#4a3aba':'white',
              color: props.mode==='dark'?'white':'#042743',
            }}
            onChange={handleOnChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleupClick}>
          {" "}
          convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoClick}>
          {" "}
          convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleClrClick}>
          {" "}
          clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter(Element=>{return Element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter(Element=>{return Element.length!==0}).length} Minutes Read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}

export default Textforms;

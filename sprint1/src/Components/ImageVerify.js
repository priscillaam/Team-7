import React from "react"
import "./ImageVerify.css"
//npm install react-image --save
import { useImage } from "react-image"
import Grid from "./Grid.js"

function ImageVerify(props) {
  const popup = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const popupInner = {
    position: "relative",
    padding: "32px",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#FFF",
    top: "16px",
    right: "16px",
  }

  return props.trigger ? (
    <div style={popup}>
      <div style={popupInner}>
        <button
          style={{ position: "absolute", top: "16px", right: "16px" }}
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        {props.children}
        {/* <img src="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png" alt="No Image" /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid />
        </div>
      </div>
    </div>
  ) : (
    ""
  ) //if props.trigger == true -> open "popup" div, else -> ""
}
export default ImageVerify
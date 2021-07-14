import React from "react"
import "./ImageVerify.css"
import Grid from "./Grid.js"
import { Button } from "react-bootstrap"
import ImgList from "./ImgList.js"

function ImageVerify(props, images) {
  var keys = ["Cat", "Pizza", "Car"]
  var randKey = keys[Math.floor(Math.random() * keys.length)]

  return props.trigger ? (
    <div className="popup">
      <div className="popupInner">
        <button
          onClick={() => props.setTrigger(false)}
          style={{ float: "right" }}
        >
          x
        </button>
        <div className="header">
          <h3>Select all Images with</h3>
          <p>{randKey}</p>
        </div>
        {props.children}
        <div>
          <Grid />
        </div>
        <div className="footer">
          <div className="refresh">
            <Button>Refresh</Button>
          </div>
          <div className="verify">
            <Button>Verify</Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  ) //if props.trigger == true -> open "popup" div, else -> ""
}
export default ImageVerify

import React from "react"
import { useState } from "react"
import "./ImageVerify.css"
import Grid from "./Grid.js"
import { Button } from "react-bootstrap"
import checkBox from "./Check.js"

function ImageVerify(props, images) {
  const [buttonPopup, setButtonPopup] = useState(false)
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
          {/* here we are passing the random key that was selected for comparison later on */}
          <Grid randKey={randKey.toString()} />
        </div>
        <div className="footer">
          <div className="refresh">
            <Button onClick={() => setButtonPopup(true)}>Refresh</Button>
            <ImageVerify
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
            ></ImageVerify>
          </div>
          <div className="verify">
            <Button onClick={() => checkBox()}>Verify</Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  ) //if props.trigger == true -> open "popup" div, else -> ""
}
export default ImageVerify

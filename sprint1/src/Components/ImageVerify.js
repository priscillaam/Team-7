import React from "react"
import "./ImageVerify.css"
//npm install react-image --save
import { useImage } from "react-image"

function ImageVerify(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
        <img
          src="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png"
          alt="No Image"
        />
      </div>
    </div>
  ) : (
    ""
  ) //if props.trigger == true -> open "popup" div, else -> ""
}
export default ImageVerify

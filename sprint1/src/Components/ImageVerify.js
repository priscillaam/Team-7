import React from "react"
import "./ImageVerify.css"
import { useImage } from "react-image"
import Grid from "./Grid.js"
import { Button } from "react-bootstrap"

function ImageVerify(props) {
  var keys = ["Cat", "Pizza", "Car"]
  var randKey = keys[Math.floor(Math.random() * keys.length)]

  var images = [
    {
      keyword: "Cat",
      imglist: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJVYJ3rT9KVeyvWltTFmfpv8C0CkhlQIQ4A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zpMzK7G6HwXUPNRU-BA03jx_1oC4Gl0NUg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5woNyRoVaXNN_8rTxh9bmEGa0QxUCHqVsmg&usqp=CAU",
      ],
    },

    {
      keyword: "Pizza",
      imglist: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-eJmvQnM5YyC8UwvvIr56hMyQr0Wa6vppA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuIjca1eL6dRRtFlrrV-4JSOZzDVEzuqK7g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs32OMWj9HaCk9mrdlbvYTWt0yCKWGP4EnQ&usqp=CAU",
      ],
    },

    {
      keyword: "Car",
      imglist: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci4ViVbKJW1HbRq0H9BlZEYdTqSUcFeSkQA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBSI6p-YvPu4Sy_J-h_WfqcHudtYMr_pGoQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPvuyoxmr7oLHJzLhsioZXqmRI2G_F5WOXQ&usqp=CAU",
      ],
    },
  ]

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

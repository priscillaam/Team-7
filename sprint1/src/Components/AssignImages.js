import React from "react"
import ImgList from './ImgList.js'

function AssignImages() {
    const imgs = {
      width: "84px",
      height: "84px",
    }
  
    //function I was creating to add images onto the grid
  
    return (
      <img style={imgs} className="imgs" src={ImgList()} alt="logo" />
    )
  }
  export default AssignImages
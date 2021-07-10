import React from "react"
import ImgList from './ImgList.js'

function AssignImages(images) {
  const keywords = ["Cat", "Pizza", "Car"];
  
  const imgs = {
    width: "120px",
    height: "120px",
  }

  //function I was creating to add images onto the grid
  console.log(images.keyword)
  return (
    <>
    <img style={imgs} className="imgs" src={ImgList(images.keyword)} alt="logo" />
    </>
  )
}
export default AssignImages
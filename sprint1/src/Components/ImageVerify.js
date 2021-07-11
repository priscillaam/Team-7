import React from "react"
import "./ImageVerify.css"
import ChosenKey from './ChosenKey.jsx'
import { useImage } from "react-image"
import Grid from './Grid.js'
import { Button } from "react-bootstrap"

function ImageVerify(props) {
  const popup = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  }

  const popupInner = {
    position: 'relative',
    width: '400px',
    height: '600px',
    border: '1px solid grey',
    backgroundColor: "white",
    top: "-100px",
    right: "16px",
    paddingTop: '10px'
  }
  const header = {
    top: '0',
    width: '369px',
    height: '113px',
    backgroundColor: '#4c8bf5',
    color: 'white',
    paddingTop: '20px',
    paddingLeft: '10px',
    margin: 'auto'
  }
  const footer = {
    position: 'absolute',
    borderTop: '.01em solid grey',
    bottom: '0',
    width: '399px',
    height: '85px'
  }
  const refresh = {
    height: '85px',
    float: 'left',
    padding: '25px'
  }
  const verify = {
    height: '85px',
    float: 'right',
    padding: '25px'
  }
  return props.trigger ? (
    <div style={popup}>
      <div style={popupInner}>
        <button onClick={() => props.setTrigger(false)} style={{ float: 'right' }}>
          x
        </button>
        <div style={header}>
          <h3>Select all Images with</h3>
          <ChosenKey />
        </div>
        {props.children}
        <div>
          <Grid />
        </div>
        <div style={footer}>
          <div style={refresh}>
            <Button>Refresh</Button>
          </div>
          <div style={verify}>
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

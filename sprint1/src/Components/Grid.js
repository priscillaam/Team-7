import React, { useState } from "react"
import { useImage } from "react-image"
import AssignImages from './AssignImages.js'
import ImgList from './ImgList.js'
import ChosenKey from './ChosenKey.jsx'


//function to set up grid
function Grid() {
    const [checked, setChecked] = useState(false)
    const state = {
      Checknames: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
      }
    }
    const checkclick = (e) => {
      var {name, checked} = e.target
      setChecked(!checked)
    }

    const square = {
      border: "6px solid white",
    }
  
    return (
      //adding inline style/css to make the grid columns, rows, and cell sizes
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 125px)",
          gridTemplateRows: "repeat(3, 125px)",
        }}
      >
        <div className="checkboxD" /*onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="1"
            className="checkIMG"
            id="myCheckbox1"
          />
  
          <AssignImages />
        </div>
        <div className="checkboxD" /*onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="2"
            className="checkIMG"
            id="myCheckbox2"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="3"
            className="checkIMG"
            id="myCheckbox3"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="4"
            className="checkIMG"
            id="myCheckbox4"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="5"
            className="checkIMG"
            id="myCheckbox5"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="6"
            className="checkIMG"
            id="myCheckbox6"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="7"
            className="checkIMG"
            id="myCheckbox7"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="8"
            className="checkIMG"
            id="myCheckbox8"
          />
          <AssignImages />
        </div>
        <div className="checkboxD"  /* onClick={}*/ style={square}>
          <input
            type="checkbox"
             onChange={checkclick}
            // checked={checked}
            name="9"
            className="checkIMG"
            id="myCheckbox9"
          />
          <AssignImages />
        </div>
      </div>
    )
  }
  export default Grid
import React, { useState } from "react"
import { useImage } from "react-image"
import AssignImages from './AssignImages.js'

//function to set up grid
function Grid() {
    const [checked, setChecked] = useState(false)
  
    const square = {
      border: "1px solid white",
    }
  
    //when div is clicked it changes the state to checked if its not checked
    const handleChange = () => {
      setChecked(!checked)
      if (checked) {
        setChecked(false)
      }
    }
  
    return (
      //adding inline style/css to make the grid columns, rows, and cell sizes
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 84px)",
          gridTemplateRows: "repeat(3, 84px)",
        }}
      >
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="1"
            className="checkIMG"
            id="myCheckbox1"
          />
  
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="2"
            className="checkIMG"
            id="myCheckbox2"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="3"
            className="checkIMG"
            id="myCheckbox3"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="4"
            className="checkIMG"
            id="myCheckbox4"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="5"
            className="checkIMG"
            id="myCheckbox5"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="6"
            className="checkIMG"
            id="myCheckbox6"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="7"
            className="checkIMG"
            id="myCheckbox7"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="8"
            className="checkIMG"
            id="myCheckbox8"
          />
          <AssignImages />
        </div>
        <div className="checkboxD" onClick={handleChange} style={square}>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked}
            value="9"
            className="checkIMG"
            id="myCheckbox9"
          />
          <AssignImages />
        </div>
      </div>
    )
  }
  export default Grid
import React from "react"

//function to set up grid
export class Grid extends React.Component {
  render() {
    const square = {
      justifyContent: "center",
    }
    const imgs = {
      border: "3px solid white",
      width: "125px",
      height: "125px",
    }

    //this will take randKey from ImageVerify and print it out in the console
    console.log(this.props.randKey)

    // these are to test when clicked do something when unclicked do something
    const checkclick = (e) => {
      var { name, checked } = e.target
      //  only applies to the first top left checkbox: when checked output 'is selected', when unchecked output 'is deselected'
      if (checked) {
        console.log(images.keyword === 0)
        console.log(name + " is selected")
      } else {
        console.log(name + " is deselected!")
      }
    }

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
    function randkeyNum() {
      var keyNum = Math.floor(Math.random() * 3)
      return keyNum
    }

    function randimgNum() {
      var imgNum = Math.floor(Math.random() * 3)
      return imgNum
    }

    return (
      //adding inline style/css to make the grid columns, rows, and cell sizes

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 125px)",
          gridTemplateRows: "repeat(3, 125px)",
          justifyContent: "center",
          paddingTop: "5px",
        }}
      >
        <div /*onClick={}*/ style={square}>
          <input
            type="checkbox"
            //onChange={checkclick}
            // checked={checked}
            onClick={checkclick}
            name="1"
            className="checkIMG"
            id="myCheckbox1"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /*onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="2"
            className="checkIMG"
            id="myCheckbox2"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="3"
            className="checkIMG"
            id="myCheckbox3"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="4"
            className="checkIMG"
            id="myCheckbox4"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="5"
            className="checkIMG"
            id="myCheckbox5"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="6"
            className="checkIMG"
            id="myCheckbox6"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="7"
            className="checkIMG"
            id="myCheckbox7"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="8"
            className="checkIMG"
            id="myCheckbox8"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
        <div /* onClick={}*/ style={square}>
          <input
            type="checkbox"
            //  onChange={checkclick}
            // checked={checked}
            name="9"
            className="checkIMG"
            id="myCheckbox9"
          />
          <img
            style={imgs}
            className="imgs"
            src={images[randkeyNum()].imglist[randimgNum()]}
            alt="logo"
          />
        </div>
      </div>
    )
  }
}
export default Grid

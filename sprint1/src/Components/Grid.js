import React from "react"

//function to set up grid
export class Grid extends React.Component {
    render() {
        var chosenKey = this.props.randKey
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
                selectedKeyword: false, //this lets you know if "Cat" is the keyword that was chosen.
                imglist: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJVYJ3rT9KVeyvWltTFmfpv8C0CkhlQIQ4A&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zpMzK7G6HwXUPNRU-BA03jx_1oC4Gl0NUg&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5woNyRoVaXNN_8rTxh9bmEGa0QxUCHqVsmg&usqp=CAU",
                    "https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg"
                ],
                selected: [
                    false, false, false, false
                ] //to keep track of images that are already being displayed
            },

            {
                keyword: "Pizza",
                selectedKeyword: false,
                imglist: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-eJmvQnM5YyC8UwvvIr56hMyQr0Wa6vppA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuIjca1eL6dRRtFlrrV-4JSOZzDVEzuqK7g&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs32OMWj9HaCk9mrdlbvYTWt0yCKWGP4EnQ&usqp=CAU",
                    "https://www.seriouseats.com/thmb/rSZmxUFduLpyx9ZcgY4TnHUr42k=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__10__20181015-state-of-slice-delmar-clay-williams-2de043fa5a0d4475b6c567e4a974b13b.jpg"
                ],
                selected: [
                    false, false, false, false
                ]
            },

            {
                keyword: "Car",
                selectedKeyword: false,
                imglist: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci4ViVbKJW1HbRq0H9BlZEYdTqSUcFeSkQA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBSI6p-YvPu4Sy_J-h_WfqcHudtYMr_pGoQ&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPvuyoxmr7oLHJzLhsioZXqmRI2G_F5WOXQ&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-79CazJxt2J7hMpYAcj83_m-OIl9Oa5UCQ&usqp=CAU"
                ],
                selected: [
                    false, false, false,false
                ]
            }
        ];

        var keyHasBeenChosen = false
        var primeKey //Array number of the chosen key
        var totalChosen = 0 //number of images from chosen key that have already been returned/selected
        function randomImg() {
            if (keyHasBeenChosen === false) { //This finds the key array number corresponding to the key name
                for (let i = 0; i < images.length; i++) {
                    if (chosenKey === images[i].keyword) {
                        images[i].selectedKeyword = true
                        primeKey = i
                        keyHasBeenChosen = true;
                    }
                }
            }
            var keyOrNot = Math.floor(Math.random() * 2) //will the next image be a chosen key or not a chosen key
            if (keyOrNot == 0) { //if 0, then the image will be from the chosen key, unless there's 3 images already being displayed 
                if (totalChosen < 3) {
                    var imgNum = Math.floor(Math.random() * images[primeKey].imglist.length)
                    if (images[primeKey].selected[imgNum] === false) { //returns image if it has not been displayed yet
                        totalChosen++
                        images[primeKey].selected[imgNum] = true
                        return images[primeKey].imglist[imgNum]
                    }
                }
                else {  //returns image that is not key image
                    var keyNum = Math.floor(Math.random() * images.length)
                    if (keyNum === primeKey) {  //This prevents a key image from being displayed
                        while (keyNum === primeKey) {
                            keyNum = Math.floor(Math.random() * images.length)
                        }
                    }
                    var imgNum = Math.floor(Math.random() * images[keyNum].imglist.length)

                    if (images[keyNum].selected[imgNum] === false) { //returns image if it has not been displayed yet
                        images[keyNum].selected[imgNum] = true
                        return images[keyNum].imglist[imgNum]
                    }
                }
            }
            else { //returns image that is not key image    [ I know, it redundant, but I'm tired :'(  ]
                var keyNum = Math.floor(Math.random() * images.length)
                if (keyNum === primeKey) {
                    while (keyNum === primeKey) {
                        keyNum = Math.floor(Math.random() * images.length)
                    }
                }
                var imgNum = Math.floor(Math.random() * images[keyNum].imglist.length)

                if (images[keyNum].selected[imgNum] === false) {   //returns image if it has not been displayed yet
                    images[keyNum].selected[imgNum] = true
                    return images[keyNum].imglist[imgNum]
                }
            }

            return randomImg()
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
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
                    src={randomImg()}
            alt="logo"
          />
        </div>
      </div>
    )
  }
}
export default Grid

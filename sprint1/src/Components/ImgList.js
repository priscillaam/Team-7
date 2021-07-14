import React from "react"

function ImgList() {
  //const keywords = ["Cat", "Pizza", "Car"];

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

  /*
    I am trying to use a nested loop with a while loop on repeat until the next most available spot in the array is reached.
    Inside the while loop is a for loop that compares the current keyword + image (using array indices, look at return())
    to each entry in the array up to index - 1. If the for loop finds a match then the loop stops and the while loop begins
    again with a new keyword + image. I have an if statement that stops the for loop and also sets the while loop to stop
    if the next most available spot in the array is reach (should be index - 1, [used][next][index]). For some reason the 
    nested loop causes my browser to freeze. I think there is an infinite loop, but it could be something else I.D.K.  
    */

  var exit = false
  //while(exit == false) {

  var keyNum = Math.floor(Math.random() * 3) //Change this to return the Keyword String? images[Math.round(Math.random() * 3)].keyword.
  var imgNum = Math.floor(Math.random() * 3)

  /* for(var i = 0; i < index; i++) {
            var num = String(""+keyNum+""+imgNum).localeCompare(usedImg[i]);
            if(num === 0) {
                break;
            }

            if(i === index - 1) {
                usedImg[i] = String(""+keyNum+""+imgNum);
                index++;
                exit = true;
                console.log(usedImg[i]);
            }
        }*/

  //}

  return images[keyNum].imglist[imgNum]
}
export default ImgList

import React from "react"
import login from "./Login";
import {userImageSequence} from "./Grid.js"
import {imageSequence2} from "./Grid"



function checkBox() {
    //compares userImagesSequence to imageSequence
    //calls login after if captcha is correct
    if (userImageSequence.toString() === imageSequence2.toString()) {
        console.log(imageSequence2.toString());
        alert("Captcha Correct");
        login();
    }
    if (userImageSequence.toString() !== imageSequence2.toString()) {
        console.log(imageSequence2.toString());
        console.log(userImageSequence.toString());
        alert("Captcah Incorrect");
        
    }
}

export default checkBox
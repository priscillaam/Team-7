
import login from "./Login";
import './Grid'
import {userImageSequence} from "./Grid.js"
import {imageSequence} from "./Grid.js"
import App from "../App"


function checkBox() {
    //compares userImagesSequence to imageSequence
    //calls login after if captcha is correct
    if (userImageSequence.toString() === imageSequence.toString()) {
        console.log(imageSequence.toString());
        alert("Captcha Correct");
        login();
    }
    if (userImageSequence.toString() !== imageSequence.toString()) {
        console.log(imageSequence.toString());
        console.log(userImageSequence.toString());
        alert("Captcah Incorrect");
        
    }
}

export default checkBox
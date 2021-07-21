import "../App"
import react from 'react'
//nested switch statements to check username and corresponding password
//need to add if statement for each case if captcha is correct or login in correct
function login() {
    //getting the string values from the user's input in username and password 
    var inputUser = document.getElementById("username");
    var inputPass = document.getElementById("formPassword");
    
    switch(inputUser.value) {
  
        case "user1":
            switch(inputPass.value) {
                case "user1-pass":
                    alert("Login Successful");
                    break;
                default:
                    alert("Incorrect Password");
                    window.location.reload();
                    break;
            }
            break;
  
        case "user2":
            switch(inputPass.value) {
                case "user2-pass":
                    alert("Login Successful");
                    break;
                    default:
                        alert("Incorrect Password");
                        window.location.reload();
                        break;
                }
        break;
  
        case "user3":
            switch(inputPass.value) {
                case "user3-pass":
                    alert("Login Successful");
                    break;
                default:
                    alert("Incorrect Password");
                    window.location.reload();
                    break;
            }
            break;
        default:
            alert("The username does not exist");
            window.location.reload();
            break;
    }
     
  }



  export default login
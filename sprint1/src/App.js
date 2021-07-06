import { useState } from 'react'
import './Components/ImageVerify.css'
// import { useImage } from 'react-image'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, FormGroup } from 'react-bootstrap'
import test1 from './Images/test1.JPG'

//This is a simple placeholder for the image randomizer we'll add. We'll delete this later, I just needed a visual outline to reflect on.
/*function ImgList() {
    var images = [
        {keyword : "Cat",
         imglist : {
            img1 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJVYJ3rT9KVeyvWltTFmfpv8C0CkhlQIQ4A&usqp=CAU"],
            img2 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zpMzK7G6HwXUPNRU-BA03jx_1oC4Gl0NUg&usqp=CAU"],
            img3 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5woNyRoVaXNN_8rTxh9bmEGa0QxUCHqVsmg&usqp=CAU"]  
         }
        },

        {keyword :"Pizza",
         imglist : {
            img4 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-eJmvQnM5YyC8UwvvIr56hMyQr0Wa6vppA&usqp=CAU"],
            img5 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuIjca1eL6dRRtFlrrV-4JSOZzDVEzuqK7g&usqp=CAU"],
            img6 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs32OMWj9HaCk9mrdlbvYTWt0yCKWGP4EnQ&usqp=CAU"]
         }
        },

        {keyword :"Car",
         imglist : {
            img7 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci4ViVbKJW1HbRq0H9BlZEYdTqSUcFeSkQA&usqp=CAU"],
            img8 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBSI6p-YvPu4Sy_J-h_WfqcHudtYMr_pGoQ&usqp=CAU"],
            img9 : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPvuyoxmr7oLHJzLhsioZXqmRI2G_F5WOXQ&usqp=CAU"]
         }
        }
    ];

    return(
        Math.round(Math.random() * 10);

        for (var i = 0, imagesLength = images.length; i < imagesLength; i++) {
            for (var j = 0, imglistLength = images[i].imglist.length; j < imglistLength; j++) {
            // do something with each list of each image keyword (i.e, for each cat picture do something)
            }
        }

    )
}*/

function AssignImages() {
    const imgs = {
        width: '84px',
        height: '84px'
    }

    const keywords = ["Cat", "Pizza", "Car"];

    var images = [
        {keyword  : "Cat",
         imglist  : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJVYJ3rT9KVeyvWltTFmfpv8C0CkhlQIQ4A&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zpMzK7G6HwXUPNRU-BA03jx_1oC4Gl0NUg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5woNyRoVaXNN_8rTxh9bmEGa0QxUCHqVsmg&usqp=CAU"  
         ]
        },

        {keyword  : "Pizza",
         imglist  : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-eJmvQnM5YyC8UwvvIr56hMyQr0Wa6vppA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuIjca1eL6dRRtFlrrV-4JSOZzDVEzuqK7g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs32OMWj9HaCk9mrdlbvYTWt0yCKWGP4EnQ&usqp=CAU" 
         ]
        },

        {keyword  : "Car",
         imglist  : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci4ViVbKJW1HbRq0H9BlZEYdTqSUcFeSkQA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBSI6p-YvPu4Sy_J-h_WfqcHudtYMr_pGoQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPvuyoxmr7oLHJzLhsioZXqmRI2G_F5WOXQ&usqp=CAU"
         ]
        }
    ];

    //function I was creating to add images onto the grid

    return (

        <img style={imgs} className="imgs" src={images[0].imglist[0]} alt="logo" />

    )
}

//function to set up grid
function Grid() {
    const square = {
        border: '1px solid white'
    }

    return (
        //adding inline style/css to make the grid columns, rows, and cell sizes
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 84px)',
            gridTemplateRows: 'repeat(3, 84px)'
        }}>

            {/* there are different ways to add css in react */}
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>
            <div style={square}>
                <AssignImages />
            </div>


        </div>


    )
}


function ImageVerify(props) {
    const popup = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const popupInner = {
        position: 'relative',
        padding: '32px',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#FFF',
        top: '16px',
        right: '16px'
    }

    return (props.trigger) ? (
        <div style={popup}>
            <div style={popupInner}>
                <button style={{ position: 'absolute', top: '16px', right: '16px' }} onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
                {/* <img src="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png" alt="No Image" /> */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Grid />
                </div>

            </div>
        </div>
    ) : ""; //if props.trigger == true -> open "popup" div, else -> ""
}


function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
        <div className="App">
            <main>
                <h1>Sign In</h1>
                <br></br>

                <Form>
                    <FormGroup controlId='formUsername'>

                        <Form.Label>Username</Form.Label>{' '}
                        <Form.Control id='username' type='text' placeholder='Username' ></Form.Control>
                    </FormGroup>
                    <br />
                    <FormGroup controlId='formPassword'>
                        <Form.Label>Password</Form.Label>{' '}
                        <Form.Control type='password' placeholder='Password' ></Form.Control>

                        <Form.Text>Feel safe logging in using our secure forms.</Form.Text>
                    </FormGroup>
                </Form>
                <br></br>
                <Button variant='secondary' type='submit' onClick={() => setButtonPopup(true)} > Login</Button>

            </main>

            <ImageVerify trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Pop Up Message</h3>
            </ImageVerify>
        </div>
    );
}


export default App;

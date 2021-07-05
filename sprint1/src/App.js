import { useState } from 'react'
import './Components/ImageVerify.css'
// import { useImage } from 'react-image'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, FormGroup } from 'react-bootstrap'
import test1 from './Images/test1.JPG'

function AssignImages() {
    const imgs = {
        width: '84px',
        height: '84px'
    }
    
    //function I was creating to add images onto the grid

    return (

        <img style={imgs} className="imgs" src={test1} alt="logo" />

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

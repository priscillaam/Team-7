import React, { useState } from "react"
import "./Components/ImageVerify.css"
import ImageVerify from  "./Components/ImageVerify.js"
// import { useImage } from 'react-image'
import "./css/checkbox.css"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, FormGroup } from "react-bootstrap"


function App() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className="App">
      <main>
        <h1>Sign In</h1>
        <br></br>

        <Form>
          <FormGroup controlId="formUsername">
            <Form.Label>Username</Form.Label>{" "}
            <Form.Control
              id="username"
              type="text"
              placeholder="Username"
            ></Form.Control>
          </FormGroup>
          <br />
          <FormGroup controlId="formPassword">
            <Form.Label>Password</Form.Label>{" "}
            <Form.Control type="password" placeholder="Password"></Form.Control>
            <Form.Text>Feel safe logging in using our secure forms.</Form.Text>
          </FormGroup>
        </Form>
        <br></br>
        <Button
          variant="secondary"
          type="submit"
          onClick={() => setButtonPopup(true)}
        >
          {" "}
          Login
        </Button>
      </main>

      <ImageVerify trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Pop Up Message</h3>
      </ImageVerify>
    </div>
  )
}

export default App

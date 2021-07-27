import { useState} from "react"
import "./Components/ImageVerify.css"
import ImageVerify from "./Components/ImageVerify.js"
// import { useImage } from 'react-image'
import "./css/checkbox.css"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, FormGroup, Nav, Navbar, NavDropdown } from "react-bootstrap"
import logo from './logo.png'
function App() {
  const [buttonPopup, setButtonPopup] = useState(false)

  const div = {
    width: "425px",
    height: "500px",
    backgroundColor: "white",
    position: "relative",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <div>
      <Navbar bg="light" variant="light" fixed="top" expand="lg">
          {/* Container specific for logos - can add child components */}
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" alt="logo" /> Logo
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="">Blog</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Store</Nav.Link>
              <NavDropdown title="Contact Us">
                <NavDropdown.Item href="">Example 1</NavDropdown.Item>
                <NavDropdown.Item href="">Example 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Example 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <main>
        <div class="background"></div>
        <div style={div}>
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
              <Form.Control
                type="password"
                placeholder="Password"
              ></Form.Control>
              <Form.Text>
                Feel safe logging in using our secure forms.
              </Form.Text>
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
        </div>
      </main>

      <ImageVerify
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      ></ImageVerify>
    </div>
  )
}

export default App

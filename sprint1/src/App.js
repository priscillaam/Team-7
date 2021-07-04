import { useState } from 'react'
import './Components/ImageVerify.css'
// import { useImage } from 'react-image'


//function to set up grid
function Grid() {
    const square = {
        border: '1px solid black'
    }

    return (
        //adding inline style/css to make the grid columns, rows, and cell sizes
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 84px)',
            gridTemplateRows: 'repeat(3, 84px)'
        }}>

            {/* there are different ways to add css in react */}
            <div style={square}>1</div>
            <div style={square}>2</div>
            <div style={square}>3</div>
            <div style={square}>4</div>
            <div style={square}>5</div>
            <div style={square}>6</div>
            <div style={square}>7</div>
            <div style={square}>8</div>
            <div style={square}>9</div>
        </div >
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
                <h1>React Pop up</h1>
                <br></br>

                <form>
                    Username: <input id="username" name="Username"></input> <br></br>
                    <br></br>
                    Password  : <input id="password" name="Password"></input>
                </form>
                <br></br>
                <button onClick={() => setButtonPopup(true)} > Login</button>
            </main>
            <ImageVerify trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Pop Up Message</h3>
            </ImageVerify>
        </div>
    );
}


export default App;

import ImageVerify from './Components/ImageVerify';
import { useState } from 'react';

function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div className="App">
          <main>
              <h1>React Pop up</h1>
              <br></br>
  
              <form>
              Username: <input id ="username"  name="Username"></input> <br></br>
              <br></br>
              Password  : <input id ="password"  name="Password"></input>
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

import logo from './logo.svg';
import './App.css';

import ReCAPTCHA from "react-google-recaptcha"
import { useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

function App() {
  const [test, setTest] = useState(null)
  
  return (
    <div className="App">
      <form>
        <input>
        </input>
  <ReCAPTCHA
        sitekey="6LfiEeApAAAAAF4ii2wb09NvzxsZwuu6z4MCKvFi"
          onChange={(val)=>{setTest(val)}}
        /> 
   
        <button>Submit</button>
     </form>
    </div>
  );
}

export default App;

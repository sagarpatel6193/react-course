import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

import React, {useState} from 'react';  
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route

// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if(
      mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#002b4a';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
    }
  return (
    <>
    {/* <Router> */}
      <Navbar logo="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Switch> */}
          {/* <Route path="/about" element={<About/>}>
            <About />
          </Route> */}
          {/* <Route exact  path="/"> */}
            <div className="container mt-5">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            </div>
          {/* </Route> */}
        {/* </Switch> */}
    {/* </Router> */}
    </>
  );
}

export default App;

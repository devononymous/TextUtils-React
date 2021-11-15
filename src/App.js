// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js'
// import About from './components/About.js'
import React, { useState } from 'react'
import Alert from './components/Alert.js'
// import {BrowserRouter as Router,Switch, Route, } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
   setTimeout(() => {
     setAlert(null);
   }, 2000);
  }

 
  const toggleMode =()=>{
    if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor= 'black';
    showAlert("Dark mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
    // setInterval(() => {
    //   document.title = "TextUtils - Dark Mode";
    // }, 2000);
    // setInterval(() => {
    //   document.title = " Install TextUtils Now";
    // }, 1100);
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = "TextUtils - Light Mode"
    
  }
}


const greenMode =()=>{
  if (mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor= 'green';
  showAlert("Dark mode has been enabled", "success");
  
}
else{
  setMode('light');
  document.body.style.backgroundColor= 'white';
  showAlert("Light mode has been enabled", "success");
  
}}
const blueMode =()=>{
  if (mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor= '#0040ff';
  showAlert("Dark mode has been enabled", "success");
  
}
else{
  setMode('light');
  document.body.style.backgroundColor= 'white';
  showAlert("Light mode has been enabled", "success");
}
}
const redMode =()=>{
  if (mode === 'light'){
  setMode('red');
  document.body.style.backgroundColor= 'red';
  showAlert("Dark mode has been enabled", "success");
  
}
else{
  setMode('light');
  document.body.style.backgroundColor= 'white';
  showAlert("Light mode has been enabled", "success");
  }
}
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" contactUs="Contact us"/> */}
    {/* <Navbar /> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode= {mode} redMode={redMode} greenMode={greenMode} blueMode={blueMode} toggleMode={toggleMode} />
    <Alert   alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route>  */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
   </>
  );
}

export default App;

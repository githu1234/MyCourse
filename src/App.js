import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
 }
 const removeBodys=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warnig')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')

}
  const [mode, setmode] = useState('light');
   const toggleMode=(cls)=>{
    removeBodys();
     document.body.classList.add("bg-"+cls)
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled","success");
        document.title='mycourse-DarkMode';
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='grey';
        showAlert("light mode is enabled","succes");
        document.title='mycourse-LightMode';


      }
  }
  return (
    <>
    <Router>
      <Navbar mycourse="mycouse" Home="Home" About="About us" mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className="container" mode={mode}>
      <Switch>
          <Route exact path="/about">
          <About mode={mode} />

          </Route>
          <Route exact path="/">
          <Textforms showAlert={showAlert} heading="Enter the text here" mode={mode}/>

          </Route>
        </Switch>
      </div>
      </Router>
    </>
)};
 export default App; 
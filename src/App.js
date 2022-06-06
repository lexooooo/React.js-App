import React from "react";
import ReactDom from "react-dom";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from './Pages/Page1.js';
import Toggle from './tools/toggle.js';
import Page2 from './Pages/Page2.js';
import SignUpForm from './Pages/SignUpForm.js';
import HomePg from "./Pages/HomePg";
import {MdReorder} from 'react-icons/md';
import Checkers from './checkers2.png';



function App() {
  const uRl = window.location.href;
  const HOME = document.getElementById("home");
  ReactDom.findDOMNode(HOME);
  const ShowMenu = () => {
  const menu = document.getElementById("menuHolder");
  ReactDom.findDOMNode(menu);
  menu.classList.toggle("menuholderAfterClick")
  }
  

 
  return (

 
    <div className="App" id="App">
        <Router>
     <div className="header">
       <div className='toggleDiv'><Toggle/></div>
       <ul className="HeaderMenu">
         <li>
            <a><div id="home"><Link  to='/'>Home</Link></div></a>
          </li>
          <li>
           <a><div id="about"><Link to='/Gallery'>Gallery</Link></div></a>
          </li>
          <li>
            <a><div id="contact"><Link to='/Contacts'>Contact</Link></div></a>
          </li>
          <div style={{marginLeft:"850px"}}><MdReorder className="menuicon" id="menuIcon" onClick={ShowMenu}/></div>
       </ul>
       
       <Switch>
         <Route exact path = "/">
        <HomePg/>
         </Route>
        <Route path = '/Gallery'>
           <Page2/>
        </Route>
        <Route path="/Profile">
          <Page1/>
        </Route>
          <Route  path = "/api/SignUpForm">
             <SignUpForm/>
          </Route>
       </Switch>
     </div>
     <div className="PageHolder">
       <div className="menuholder" id="menuHolder">
         <div><Link to = '/Profile' style={{textDecoration:"none", color:"inherit"}}>Profile</Link></div>
       </div>
     </div>
    </Router>
     <div className="line"></div>

     



        
    </div>
  );
}

export default App;

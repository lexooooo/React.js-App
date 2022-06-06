import React from 'react'
import '../App.css';
import ReactDom from 'react-dom';

var triggerright = () => {
const Toggle = document.getElementById('toggler');
ReactDom.findDOMNode(Toggle);
Toggle.classList.toggle("triggerRight")
const mainApp = document.getElementById("App");
ReactDom.findDOMNode(mainApp);
mainApp.classList.toggle("AppLight");
};

export default function toggle() {

   
   

    return (
        <div>
            <div className='toggle'>
                <div className='trigger' id='toggler' onClick={triggerright}></div> 
                <div style={{fontSize:'24px', display:'inline', textAlign:'center', position:'relative', right:'30px', top:'25px', color:'white'}}>Dark/Light</div>
            </div>
        </div>
    )
}

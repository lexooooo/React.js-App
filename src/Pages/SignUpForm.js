import React, {useState} from 'react';
import "../App.css";
import Axios from 'axios';
import Cors from 'cors';
import axios from 'axios';





export default function SignUpForm() {

    
    const [EmailReg, setEmailReg] = useState("");
    const [PasswordReg, setPasswordReg] = useState("");
    const [ConfirPasswordReg, setConfirmReg] = useState("");

    const sendData = (err, res) => {
        if (EmailReg != null && PasswordReg > 8 && ConfirPasswordReg.value == PasswordReg.value)
        {Axios.post("http://localhost:3001/api/insert", {email : EmailReg, pass : PasswordReg, conf : ConfirPasswordReg}).then(alert("SUCCESS"));
        window.location = "http://localhost:3000/Profile";
        

            
    }
        else {console.log(err)};
    };

   



    return (
        
        <div className="REGISTER">
            <div className = "RegisterForm">
                <div className="formsContainer">
                 <input type="text" placeholder="Eamil" onChange={(e) =>{setEmailReg(e.target.value)}}></input>
                 <input type="password" placeholder="Password" onChange={(e) =>{setPasswordReg(e.target.value)}}></input>
                 <input type="password" placeholder="Confirm Password" onChange={(e) =>{setConfirmReg(e.target.value)}}></input>
                 <button onClick={sendData}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

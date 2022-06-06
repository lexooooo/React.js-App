import React, { Component, useState} from 'react'
import '../App.css';
import {SiGoogle, SiFacebook, SiApple} from 'react-icons/si';
import Axios from 'axios';

const signpg = () => {
    window.location = "http://localhost:3000/api/SignUpForm";
}


// REGISTER PAGE 


export default function Page1(){

       
            return (
            <div>
                <div className="Page1">
                    <div className="signinForm">
                        <input type="text" placeholder="Email@" ></input>
                        <input type="password" placeholder="Password" ></input>
                        <button >SignIn</button>
                        <button onClick={signpg}>SignUp</button>
                    </div>

                    <div className="icons">
                      <a href="https://www.google.ge/" style={{color:"inherit"}}><SiGoogle className="icon"/></a>
                      <a><SiFacebook className="icon"/></a>
                      <a><SiApple className="icon"/></a>
                    </div>

                    <div className="centerbox"></div>

                </div>
            </div>
        )
    }


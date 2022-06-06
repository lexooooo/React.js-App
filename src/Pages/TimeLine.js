import React from 'react'
import Gif from '../FlagWave.anim.gif';
import ReactDom from 'react-dom';
import '../App.css';
import reactDom from 'react-dom';







export default function TimeLine() {

    
    let comments = [];

    let LoadComments = function () {
        if (localStorage.getItem("commentary"))
            {comments = JSON.parse(localStorage.getItem("commentary"));
        }
    };

    LoadComments();

    let ShowComments = function(){
        let commentfield = document.getElementById("commentfield");
        let out = '';
        comments.forEach(function(item){
           out +=  `<p>${item.name}</p>`;
           out +=  `<p>${item.body}</p>`;
            });
        commentfield.innerHTML = out;
        };
      
    



    let saveComment = function(){
        localStorage.setItem('commentary', JSON.stringify(comments));
        };   

    let clicking = () => {
        
        let WRITE = document.getElementById("write");
        let CONTAINTER = document.getElementById.toString("comment");
        
        

        let comment = {
            name : WRITE.value,
            body : WRITE.value,
        }

        WRITE.value = ("");

        comments.push(comment);
        saveComment();
        ShowComments();
    };

       
   
        return (
            <div>
                <div className="card">
                   <img width="100" src={Gif}></img>
                   <div className="cardcomment">
                       <input type="container" id="comment" ></input>
                       <input type="text" id="write"></input>
                       <button id="commbutton" onClick={clicking}>Click</button>
                   </div>
                </div>
            </div>
        )
    };

    



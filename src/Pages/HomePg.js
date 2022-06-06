import React, {useState, useEffect} from 'react'
import reactDom from 'react-dom';
import "../App.css";

const TimeLineCard = <div className="TimeLineCard"></div>;




export default function HomePg() {
   
    
    return (
        <div>
            <div className="HomePg">
            <div className="Line1"></div>
            {/* LINE */}
             <div className="TimeLineSpace">
                {TimeLineCard}
             </div>
            {/* LINE */}
            <div className="Line2"></div>
            </div>
        </div>
    )
}

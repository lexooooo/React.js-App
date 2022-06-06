import React from 'react';
import TimeLine from './TimeLine';
import Gif from '../FlagWave.anim.gif';

export default function Page2() {
    return (
        <div>
            <span style={{position:"relative", display:"flex"}}>
            <div className="page2">
                <div>
                    <TimeLine/>
                </div>
                <div id="commentfield" style={{margin:' 0 auto', width:"500px",height:'auto'}}>

                </div>
            </div>
            </span>
        </div>
    )
    
}

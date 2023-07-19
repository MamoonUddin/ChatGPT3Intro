import React, { useState }  from "react";
import {RiCloseLine } from 'react-icons/ri';

export default function Disclaimer () {
    const [closeDisclaimer, setCloseDisclaimer] = useState(true);

    let content;

    if (closeDisclaimer) {
        content =<div className="Disclaimer_Box">
        <div className="Disclaimer_Box_Top_Row">
            <h1 className="Disclaimer_Title">This is a Repliceated Site</h1>
            <RiCloseLine color="#fff" size={27} onClick={() => setCloseDisclaimer(false)} />
        </div>
        <div className="Disclaimer_Message_Box">
            <p>
                This website was built following this <a className="underline font-bold" href="https://www.youtube.com/watch?v=F627pKNUCVQ&ab_channel=JavaScriptMastery" target="_blank" rel="noreferrer">Youtube</a> video. 
                The changes Made are The File structure, usage of tailwind CSS instead of normal CSS, and This Disclaimer Section.
            </p>
        </div>
    </div>
    }
    
    return (content)
        
}
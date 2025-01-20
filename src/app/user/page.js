"use client"
import {useState} from 'react';
function page(){
    const[h3Style, seth3Style] = useState({backgroundColor:"green"});
    return(
        <div>
            <h1 style={{backgroundColor:"blueviolet"}} >User Page</h1>
            <h2> Heading 2 in user page </h2>
            <h3 style={h3Style}> Heading 3 in user page </h3>
            <button onClick={() => seth3Style({backgroundColor:"red"})}>Update Style</button>
        </div>
    );
}

export default page; 
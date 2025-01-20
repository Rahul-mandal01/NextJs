"use client";
import { useState } from "react";
import style from "./style.module.css"

export default function Home() {
  const [color, setColor] = useState('blue');  // State for color
  const {red} = style;    // Destructuring the style object
  return (
    <main>
      <h1 className={color =='red' ? style.red : style.green} >Condition with style</h1>
      <h2 style={{backgroundColor:color=='red' ? 'red' : 'green'}}>Heading 2</h2>
      <h3 id = {style.orange}>Heading 3</h3>

      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>

      <button onClick={() => setColor("blue")} >Update color</button>
    </main>
  );
}

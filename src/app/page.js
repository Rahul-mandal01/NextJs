'use client' //Directive Definition for using client side javascript 
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Rahul");

  // let data = "Rahul";

  // const apple = (item) =>{
  //   alert(item);
  // }

  // USING STATE DATA
  const apple = () => {
    setName("John");
  }

  // USING VARIABLE DATA
  // const apple = () =>{
  //   data = "John";
  // }

  // COMPONENT UNDER COMPONENT
  const InnerComp = () => {
    return(
      <div>
        <h3>Inner Component</h3>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* <User name="Rahul"/>
      <User name="John"/>

      <h1> Home Page </h1>

      <User name="Sam"/>
      <User name="Alice"/> */}

      <h1>Events, function and state {name}</h1>
      {/* <h1>Events, function and state {data}</h1> */}
      {/* <button onClick={() => alert("Hello Rahul!")}>Click Me</button> */}
      {/* <button onClick={() => apple("color")}>Click Me</button> */}
      <button onClick={ () => apple()}>Click Me</button>
      
      {/* CALLING INNER COMPONENT */}
      {/* <InnerComp /> */}

      {/* CALL INNER COMPONENTS THROUGH JSX FORMAT MEANS NORMAL FUNCTION */}
      {InnerComp()}

    </div>
  );
}


// const User = (props) => {
//   return (
//     <div>
//       <h2>Hii Duniya! This is {props.name}</h2>
//     </div>
//   );
// }

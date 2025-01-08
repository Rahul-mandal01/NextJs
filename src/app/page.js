"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  }
  return (
    <div className={styles.page}>
      <div>
        <h1>Basic Routing | Make New Page</h1>

        {/* LINKING */}
        <Link href="/login">Go to Login Page</Link>
        <br />
        <br />
        <Link href="/about">Go to About Page</Link>
        <br />
        <br />

        {/* PROGRAMMATIC NAVIGATION */}
        {/* <button onClick={() => router.push("/login")}>Go to Login Page</button>
        <br />
        <br />
        <button onClick={() => router.push("/about")}>Go to About Page</button> */}

        {/* Alternative */}

        <button onClick={() => navigate("/login")}>Go to Login Page</button>
        <br />
        <br />
        <button onClick={() => navigate("/about")}>Go to About Page</button>

      </div>
    </div>
  );
}
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

"use client"
export default function Price(props){
    console.log(props);
    return(
        <div>
            <button onClick={() => alert(props.price)}>Check Price</button>
        </div>
    );
}
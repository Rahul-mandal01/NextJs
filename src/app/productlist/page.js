"use client"
import { useEffect, useState } from 'react';

export default function page() {
  const [product, setProduct] = useState([]);
  useEffect (async ()=> {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    
    setProduct(data.products);
  },[])

  return (
    <div>
      <h1>Product List</h1>
      {
        product.map((item)=>(
          <div>
            <h3>Name: {item.title}, Price: {item.price}</h3>
          </div>
        ))
      }
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ClientSideRenderingExample = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
     const fetchData = async() =>{
        const resp =  await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await resp.json();
        console.log(data)
        setItem(data.slice(0,100))
     }
     fetchData();
    },[]);


  return (
    <div>
      <h1>List  Page</h1>
      <p>This is the List page of my Next.js app.</p>
      <Link href="/">
        <b>Back</b> 
      </Link>
      <ul>
      {items.map((item) => (
      <li key={item.id}>{item.title} </li>
      ))}
      </ul>

    </div>
  );
};

export default ClientSideRenderingExample;




import React from 'react';
import Link from 'next/link';

const ServerSideRenderingExample = ({items}) => {
  return (
    <div>
      <h1> Server Side Rendering Page</h1>
      <Link href="/">
        Back
      </Link>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const items = await res.json();
  return {
    props: {
      items: items.slice(0, 100),
    },
  };
}

export default ServerSideRenderingExample;
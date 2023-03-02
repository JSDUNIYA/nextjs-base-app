import React from 'react';

const StaticSideGenerator = ({ items }) => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my Next.js app.</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const items = await res.json();
  return {
    props: {
      items: items.slice(0, 100),
    },
  };
}

export default StaticSideGenerator;
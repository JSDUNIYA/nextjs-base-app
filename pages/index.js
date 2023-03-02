import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        About Page
      </Link>
    </div>
  );
};

export default Home;
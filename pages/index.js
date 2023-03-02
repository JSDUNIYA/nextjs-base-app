import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        About Page
      </Link>
      <br></br>
      <Link href="/clientSideRenderingExample">
      Client Side Rendering Page
      </Link>
      <br></br>
      <Link href="/serverSideRenderingExample">
      Server Side Rendering Page
      </Link>
      <br></br>
      <Link href="/staticSideGenerator">
      Static Side Generator Page
      </Link>

      
    </div>
  );
};

export default Home;
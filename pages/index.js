import React from 'react';
import Link from 'next/link';
import styles from "../styles/styles.module.css"

const Home = () => {
  return (
    <div>
         <h1 className={styles.heading}>Welcome to my Next.js app</h1>
      <p className={styles.paragraph}>This is the home page.</p>
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
import React from 'react';
import Link from 'next/link';

const About = () => {
    
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my Next.js app.</p>
      <Link href="/">
        <b>Back</b> 
      </Link>
    </div>
  );
};

export default About;




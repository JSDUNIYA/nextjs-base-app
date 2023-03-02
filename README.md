# nextjs-base-app

### Create simple nextjs app

## npm init -y & npm install react & react-dom next

## create page in path pages/index.js

```js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
};

export default Home;
```

## next js will add it's own server so in your package-json file add this in script section

```js
"dev": "PORT=3001 next dev"
```


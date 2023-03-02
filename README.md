# nextjs-base-app

## Create simple nextjs app

### Step one

```console
npm init -y & npm install react & react-dom next
```

### Create page in path pages/index.js

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

### Next js will add it's own server so in your package-json file add this in script section

```js
"dev": "PORT=3001 next dev"
```
### To run application

```console
npm run dev
```

### Routing (Client Side Rendering)

 First we are trying with client side rendering  for that we are using useEffect method
 we we look the list.js file, we are using fetch api to get 100 items displying on page link to go this page is added in home page as list page

### Routing (Server Side Rendering)




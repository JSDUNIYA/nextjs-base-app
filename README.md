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
We are initially attempting client-side rendering using the useEffect method. If we take a look at the list.js file, we are using the Fetch API to retrieve and display a list of 100 items on a page. Additionally, a link to the list page has been added to the home page.

### Routing (Server Side Rendering)
To use server-side rendering with Next.js, we can replace the useEffect hook and the fetch function with the getServerSideProps function, which is a built-in method in Next.js that runs on the server-side and fetches the data before the component is rendered. a link to the list page has been added to the home page.

### Static Side Generator (Static Side Generator )
getStaticProps is another special function in Next.js that runs at build time (during the build process) to fetch data and pre-render pages. The pages that are pre-rendered this way are called statically generated pages. a link to the list page has been added to the home page.





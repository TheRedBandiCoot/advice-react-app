# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help me improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Clicking the dice button to check some animation effect on button
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice-Generator-App-Image](https://i.ibb.co/G3DTZ08/image.png)

### Links

- Solution URL: [check here🔗](https://github.com/TheRedBandiCoot/advice-react-app.git)
- Live Site URL: [check here🔗](https://theredbandicoot-advice-react-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [vite](https://vitejs.dev/)
  - Vite.js is a development tool that comes with a dev server and is used for modern web applications.
  - It offers a faster and smoother workflow in terms of development.

### What I learned

- I used bing chatbot because I have some trouble with **React** _(Because I'm new to React)_

- [Debounce](https://www.freecodecamp.org/news/javascript-debounce-example/) - Also learn how to use debounce technic. How it's helps us so much when we're working with very slow API's:

> _Here is the code:_

```jsx
const handleQuotesGenerator = () => {
  getQuotes();
};

const debounce = (callback, delay) => {
  let timeOutId;
  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
const debounceHandleQuotesGenerator = debounce(handleQuotesGenerator, 1000);
return (
  <animated.button className="dice" onClick={debounceHandleQuotesGenerator}>
    <img src={dice} alt="" />
  </animated.button>
);
```

- Also learn how learn how to React-Spring. Such a cool library for react users to create beautiful animations without scratching your head.

- Already learn how to use custom hooks for react components but never really use it for my own project today I also applied custom hooks for my projects.

> _Here is the code:_

```jsx
import { useEffect, useState } from 'react';

const useQuote = (API_URL) => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const getQuotes = async () => {
    try {
      const resp = await fetch(API_URL);
      if (!resp.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      const data = await resp.json();
      setQuote(data);
    } catch (error) {
      setError(true);
      console.error(`Error: ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return { quote, isLoading, isError, getQuotes };
};

export default useQuote;
```

### Useful resources

- [Bing ChatBot](https://www.bing.com/search?form=NTPCHT&q=What+can+the+new+Bing+chat+do%3f&showconv=1)
- [Custom-Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [React-Spring](https://www.react-spring.dev/)
- [React 18 Tutorials By Codding Addict](https://youtu.be/Flbw5BX_AX0)

## Author

- Github - [TheRedBandiCoot](https://github.com/TheRedBandiCoot)
- Frontend Mentor - [@TheRedBandiCoot](https://www.frontendmentor.io/profile/TheRedBandiCoot)
- Twitter - [@subho19996](https://twitter.com/subho19996)

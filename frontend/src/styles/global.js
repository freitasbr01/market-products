import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    /* font-family: "Open Sans", sans-serif; */
    font-family: "Urbanist", sans-serif;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button, a {
    font-weight: 500;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
    font-family: "Urbanist", sans-serif;
  }
`
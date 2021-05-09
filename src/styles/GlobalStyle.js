import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --redGradient: linear-gradient(to right, #ec8c69 0%, #ee609c 100%);
  --blueGradient: linear-gradient(to right, #b7f8db 0%, #5aafc5 100%, #50a7c2 100%);
  --greenGradient: linear-gradient(to right, #9be15d 0%, #00e3ae 100%);
  --brilliantRose: #ee609c;
  --fountainBlue: #50a7c2;
  --limeade: #58bd00;
  }

* {
  box-sizing: border-box
}
  html {
  /* font-size: 10px; */
  font-size: 62.5%;
}

/* 600px */
@media only screen and (max-width: 37.5em) {
  html {
    /* font-size: 10px; */
    font-size: 62.5%;
  }
}

/* 900px */
@media only screen and (max-width: 56.25em) {
  html {
    /* font-size: 8px; */
    font-size: 50%;
  }
}

/* 1200px */
@media only screen and (max-width: 75em) {
  html {
    /* font-size: 9px */
    font-size: 56.25%;
  }
}

/* 1800px */
@media only screen and (min-width: 112.5em) {
  html {
    /* font-size: 12px; */
    font-size: 75%;
  }
}

body {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  background-color: #222222;
  color: #fff;
  max-width: 100vw !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

`;

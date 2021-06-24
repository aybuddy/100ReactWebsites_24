import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --red: #AA2B1D;
  --red1: #D63624;
  --orange1: #CC561E;
  --orange2: #EF8D32;
  --green: #BECA5C;
  --black: #09000d;
  --white: #fbf6f0;

  --h1: 6.4rem;
  --h2: 4.8rem;
  --h3: 3.2rem;
  --h4: 2.4rem;
  --h5: 1.8rem;
  --h6: 1.6rem;
  --p: 1.6rem;

  // Fonts
  --serif: 'Benne', Georgia, serif;
  --sans-serif: 'Poppins', Arial, sans-serif;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  line-height: 1;
  /* overflow-x: hidden; */
  font-family: var(--sans-serif);
  font-weight: 400;
  font-size: 1.6rem;
}

ul {
  list-style: none;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

a,
a:active,
a:hover,
a:visited,
a:link {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--serif);
  letter-spacing: 2px;
}

h1 {
  font-size: var(--h1)
}
h2 {
  font-size: var(--h2)
}
h3 {
  font-size: var(--h3)
}
h4 {
  font-size: var(--h4)
}
h5 {
  font-size: var(--h5)
}
h6 {
  font-size: var(--h6)
}

p, li {
  letter-spacing: 1px;
  font-family: var(--sans-serif);
}

.app {
  height: 100%;
  width: 100%;
}

.fullImage {
  max-width: 742px;
  width: 100%;
  /* height: auto; */
}

.con-h {
  display: flex;
  padding: 1%;
}

.con-v {
  display: flex;
  flex-direction: column;
  padding: 1%;
}

.con618 {
  max-width: 742px; 
  flex: .618;
  order: 2;
  width: 100%;
}

.con618-reverse {
  max-width: 742px; 
  flex: .618;
  order: 1;
  width: 100%;
}

.con382 {
  flex: .382;
  max-width: 458px;
  order: 1;
  width: 100%;
}

.con382-reverse {
  flex: .382;
  max-width: 458px;
  order: 2;
  width: 100%;
}

.con382-end {
  align-self: flex-end;
}

.con618-vert {
  flex: .618;
  width: 100%;
  max-height: 61.8vh;
  height: 100%;
}
.con382-vert {
  flex: .382;
  width: 100%;
  max-height: 38.2vh;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .con-h {
    flex-direction: column;
  }
  .con382 {
    max-width: 100%;
  }
}

`;

export default GlobalStyle;

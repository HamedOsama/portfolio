import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding : 0;
}
body {
  font-family: 'Source Sans Pro',sans-serif
}
a{
  text-decoration: none;
  color: inherit;
}
h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
`

export default GlobalStyles;
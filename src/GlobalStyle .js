import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import bgimg from "./img/bg.jpg";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  // You can continue writing global styles here
  body {
    padding: 0;
    /* background-color: black; */
   box-sizing:border-box;


     margin:auto;
 
  }
  #root{
  height:100vh;
  display:flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url(${bgimg})
  }
  list-style:none;
  color:red;
  background-color:red;
  ul{
 list-style:none;
  }
h1, h2, h3, h4{
    padding:0;
    margin:0;
}
button{
    border:none;
    background: none;
    cursor: pointer;
}
input{
    border:none;
    padding:0 5px;
    
}
`;

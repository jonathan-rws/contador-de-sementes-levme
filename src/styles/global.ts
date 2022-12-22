import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

}
body{
  -webkit-font-smoothing: antialiased;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  
}

body, input-security, textarea, button{
  font-family: 'Poppins', sans-serif;

}
button{
  transition: filter 0.2s;
  cursor: pointer;
  &:hover:not(:disabled){
    filter: saturate(2.5);
  }
  &:disabled{
    cursor: default;
  }
}
:focus{
  outline: 0;
    box-shadow:  0 0 4px ${(props) => props.theme.pink};
}
`
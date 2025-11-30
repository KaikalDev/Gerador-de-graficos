import { createGlobalStyle } from 'styled-components'

export const Colors = {
  bg_black: '#050404',
  bg_code: '#161b22',
  bg_gray: '#0d1117',
  border: '#30363d',
  text: '#ccc'
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${Colors.bg_gray};
  }

  main {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalStyles

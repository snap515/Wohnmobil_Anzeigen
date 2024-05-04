import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './styles';
export const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: 'Inter';
    font-style :normal;
    font-weight: 400;
    src: url('../fonts/Inter-Regular.ttf') format('ttf');
  }

    @font-face{
    font-family: 'Inter';
    font-style :normal;
    font-weight: 500;
    src: url('../fonts/Inter-Medium.ttf') format('ttf')
  }

    @font-face{
    font-family: 'Inter';
    font-style :normal;
    font-weight: 600;
    src: url('../fonts/Inter-SemiBold.ttf') format('ttf')
  }

  body {
  font-family: 'Inter', sans-serif;
  color: ${theme.colors.primaryBlack};
}
ul,
ol {
  list-style: none;
}

button{
  cursor: pointer
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}


input {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

svg {
  display: block;
}

*,
::before,
::after {
  box-sizing: border-box;
}

`;

export const Container = styled.div`
  width: 1440px;
  margin: 20px auto 0;
  padding: 100px 64px;
`;

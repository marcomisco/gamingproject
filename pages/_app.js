import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,  
  body {
    padding: 0;
    margin: 0;
    background: rgb(27,40,56);
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#151515',
    secondary: '#202020',
    active: '#2d2d2d',
    inversePrimary: '#fff',

    textColor: '#fff',
    inverseTextColor: '#000',
  },
  border: {
    radius: '8px',
    minRadius: '4px',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

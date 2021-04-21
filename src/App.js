// App.js
import React from 'react';

import original from "react95/dist/themes/original";
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/globalStyles';

import Projects from './Components/Projects/Projects';



function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={original}>
        <Projects />
      </ThemeProvider>
    </>
  );
}

export default App;
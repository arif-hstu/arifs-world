// App.js
import React from 'react';

import original from "react95/dist/themes/original";
import { ThemeProvider } from 'styled-components';
import { Rnd } from 'react-rnd';

import GlobalStyle from './theme/globalStyles';

import Projects from './Components/Projects/Projects';
import Avatar from './Components/Avatar/Avatar';



function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={original}>
        <Projects />
      </ThemeProvider>
      <Avatar />
    </>
  );
}

export default App;
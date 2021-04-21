import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Rnd } from 'react-rnd';

import Draggable from 'react-draggable';

import { styleReset, List, ListItem, Divider, Tooltip, Button } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;


const myTheme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};


const App = () => {
  const [state, setState] = useState({
    width: 'auto',
    height: 'auto',
    x: '300',
    y: '300'
  });

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <div
          style={{
            width: '800px',
            height: '400px',
          }}
        >
          <Rnd
            default={{
              x: 150,
              y: 205,
              width: 500,
              height: 190,
            }}
          >
            <List style={{ margin: 0, height: '100%', width: '100%' }}>
              <ListItem>🎤 Second</ListItem>
              <ListItem>💃🏻 Dance</ListItem>
              <Divider />
              <ListItem disabled>😴 Sleep</ListItem>
            </List>
          </Rnd>
        </div>
      </ThemeProvider>
    </div>
  )
};

export default App;

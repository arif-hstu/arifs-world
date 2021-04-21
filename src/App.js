// App.js
import React from 'react';

import { styleReset, List, ListItem, Divider, Tooltip, Button, WindowHeader } from 'react95';
import original from "react95/dist/themes/original";
import { ThemeProvider } from 'styled-components';
import { Rnd } from 'react-rnd';

import GlobalStyle from './theme/globalStyles';



function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={original}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
import React from 'react';

import { styleReset, List, ListItem, Divider, Tooltip, Button, WindowHeader } from 'react95';
import { Rnd } from 'react-rnd';


function Projects() {
	return (
		<>
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
		</>
	)
}

export default Projects;
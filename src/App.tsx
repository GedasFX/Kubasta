import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';
import './styles/styles.css';
import theme from './theme';
import QuizGame from './views/QuizGame';

import image from './bg/ee72e41123a09d160822985d61668c18.jpg';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <QuizGame
            imageUrl={image}
            buttons={[
              { position: { top: '10%', left: '10%' }, size: { width: '20%', height: '20%' } },
              { position: { top: '40%', left: '10%' }, size: { width: '20%', height: '20%' } },
            ]}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

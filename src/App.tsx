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

function App() {
  return (
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
        <QuizGame />
      </Container>
    </ThemeProvider>
  );
}

export default App;

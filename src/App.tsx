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
import ToolbarContent from "./views/ToolbarContent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
            <ToolbarContent/>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <QuizGame />
      </Container>
    </ThemeProvider>
  );
}

export default App;

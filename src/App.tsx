import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import './styles/styles.css';
import 'react-perfect-scrollbar/dist/css/styles.min.css';

import theme from './theme';
import QuizGame from './views/QuizGame';
import TaskDescriptionPanel from 'components/TaskDescriptionPanel/TaskDescriptionPanel';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <TaskDescriptionPanel />
        <Container maxWidth="lg">
          <QuizGame />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

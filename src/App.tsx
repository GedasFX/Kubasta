import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './styles/styles.css';
import theme from './theme';
import QuizGame from './views/QuizGame';
import TaskDescriptionPanel from 'components/TaskDescriptionPanel/TaskDescriptionPanel';
import FeedbackContainer from 'components/FeedbackContainer';
import { DialogServiceProvider } from 'contexts/DialogServiceContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogServiceProvider>
        <FeedbackContainer />
        <div>
          <TaskDescriptionPanel />
          <Container maxWidth="lg">
            <QuizGame />
          </Container>
        </div>
      </DialogServiceProvider>
    </ThemeProvider>
  );
}

export default App;

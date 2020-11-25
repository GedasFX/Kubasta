import React, { useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import gameItems from 'game-data';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import PerfectScrollbar from 'react-perfect-scrollbar';

function getSteps() {
  const keys = Object.keys(gameItems);
  return keys.map((x) => gameItems[x].title);
}

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const gameState = useSelector((state: AppState) => state.game);
  useEffect(() => {
    let activeTaskId = gameState.activeTaskId ? gameState.activeTaskId : -1;
    activeTaskId = parseInt(activeTaskId.toString());
    console.log(activeTaskId);
    if (activeTaskId !== -1) {
      setActiveStep(activeTaskId - 1);
    }
  }, [gameState.activeTaskId]);
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <PerfectScrollbar>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </PerfectScrollbar>
    </div>
  );
}

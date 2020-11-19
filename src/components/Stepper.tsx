import React, {useEffect} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import gameItems, { ScreenData, TaskData } from 'game-data';
import Typography from '@material-ui/core/Typography';
import {useSelector} from "react-redux";
import {AppState} from "../store";

function getSteps() {
  const keys = Object.keys(gameItems).sort();
  return keys.map(x => gameItems[x].title);
}

function getStepContent(step:number) {
  return gameItems[step+1] ? gameItems[step+1].description : '';
}

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const gameState = useSelector((state: AppState) => state.game);
  useEffect(() => {
    let activeTaskId = gameState.activeTaskId ? gameState.activeTaskId : -1;
    activeTaskId = parseInt(activeTaskId.toString());
    console.log(activeTaskId)
    if (activeTaskId != -1) {
      setActiveStep(activeTaskId-1);
    }

  }, [gameState.activeTaskId,]);
  return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                </StepContent>
              </Step>
          ))}
        </Stepper>
      </div>
  );

}

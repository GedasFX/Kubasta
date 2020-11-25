import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';
import { AppState } from '../store';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export default function CustomizedProgressBar() {
  const [progress, setProgress] = React.useState(50);
  const gameState = useSelector((state: AppState) => state.game);
  useEffect(() => {
    setProgress((gameState.points / 260) * 100);
  }, [gameState.points]);
  return (
    <div>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

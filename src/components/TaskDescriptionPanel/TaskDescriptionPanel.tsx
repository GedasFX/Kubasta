import { Button, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { DoubleArrow } from '@material-ui/icons';
import TabsPanel from './TabsPanel';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { AppState } from 'store';
import { useSelector } from 'react-redux';
import gameTasks, { TaskData } from 'game-data';

const sidebarWidth = 530;

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    position: 'absolute',
    top: '1rem',
    height: 'calc(100% - 2rem)',
    zIndex: 100,
    display: 'flex',
  },
  paper: {
    width: sidebarWidth,
    transition: 'all 0.3s',
    padding: theme.spacing(2),

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  drawerBtn: {
    transition: 'all 0.3s',
  },
}));

export default function TaskDescriptionPanel() {
  const [panelVisible, setPanelVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const styles = useStyles();

  const [activeTask, setActiveTask] = useState<TaskData | undefined>();

  const { width: screenWidth } = useWindowDimensions();

  const activeTaskId = useSelector(
    (state: AppState) => state.game.activeTaskId
  );

  useEffect(() => {
    setActiveTask(activeTaskId ? gameTasks[activeTaskId] : undefined);
  }, [activeTaskId]);

  // Every time a task changes, open up the sidebar.
  useEffect(() => {
    if (activeTaskId > 0) {
      setPanelVisible(true);
    }
  }, [activeTaskId]);

  useEffect(() => {
    setWidth(screenWidth > 600 ? sidebarWidth : screenWidth);
  }, [screenWidth]);

  return (
    <div className={styles.sidebarContainer}>
      <Paper
        className={styles.paper}
        style={{ marginLeft: panelVisible ? 0 : -width }}
      >
        <TabsPanel
          info={{
            title: activeTask?.title ?? '',
            instructions: activeTask?.instructions,
            setting: activeTask?.setting,
          }}
          buttons={activeTask?.buttons}
        />
      </Paper>
      <Button onClick={() => setPanelVisible(!panelVisible)} color="primary">
        <DoubleArrow
          className={styles.drawerBtn}
          style={{ transform: panelVisible ? 'rotate(180deg)' : '' }}
        />
      </Button>
    </div>
  );
}

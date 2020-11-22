import { Button, makeStyles, Paper } from '@material-ui/core';
import React, { PropsWithChildren, useState } from 'react';
import { DoubleArrow } from '@material-ui/icons';

const sidebarWidth = 400;

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
  },
  drawerBtn: {
    transition: 'all 0.3s',
  },
}));

export default function TaskDescriptionPanel(props: PropsWithChildren<{}>) {
  const [panelVisible, setPanelVisible] = useState(false);
  const styles = useStyles();

  return (
    <div className={styles.sidebarContainer}>
      <Paper
        className={styles.paper}
        style={{ marginLeft: panelVisible ? 0 : -sidebarWidth }}
      >
        Hello
      </Paper>
      <Button onClick={() => setPanelVisible(!panelVisible)}>
        <DoubleArrow
          className={styles.drawerBtn}
          style={{ transform: panelVisible ? 'rotate(180deg)' : '' }}
        />
      </Button>
    </div>
  );
}

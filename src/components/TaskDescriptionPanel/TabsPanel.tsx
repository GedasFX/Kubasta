import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Info, QuestionAnswer, List } from '@material-ui/icons';
import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import VerticalStepper from 'components/Stepper';

function TabPanel(
  props: PropsWithChildren<{
    tabId: number;
    activeTabId: number;
  }>
) {
  return (
    <div role="tabpanel" hidden={props.activeTabId !== props.tabId}>
      {props.activeTabId === props.tabId && <Box p={3}>{props.children}</Box>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
  },
}));

export default function TabsPanel(props: {
  info: { title: string; setting?: string; instructions?: string };
}) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(2);

  return (
    <>
      <Paper square className={classes.paper} elevation={3}>
        <Tabs
          centered
          value={activeTab}
          onChange={(e, v) => {
            setActiveTab(v);
          }}
        >
          <Tab icon={<Info />} />
          <Tab icon={<List />} />
          <Tab icon={<QuestionAnswer />} />
        </Tabs>
      </Paper>
      <TabPanel activeTabId={activeTab} tabId={0}>
        <Typography gutterBottom variant="h4">
          {props.info.title}
        </Typography>
        <Typography gutterBottom variant="body1">
          {props.info.setting}
        </Typography>
        <Typography gutterBottom variant="body2">
          {props.info.instructions}
        </Typography>
      </TabPanel>
      <TabPanel activeTabId={activeTab} tabId={1}>
        <VerticalStepper />
      </TabPanel>
      <TabPanel activeTabId={activeTab} tabId={2}>
        <Typography variant="h3" gutterBottom>
          Welcome to GOME
        </Typography>
        <Typography variant="body1" gutterBottom>
          Check out other tabs in the sidebar to see your current assignment.
          This panel can be opened and closed whenever you please. Some tasks
          will be performed in this window.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Cyber awareness training tool for ITC8210HACS, TalTech.
        </Typography>
        <Typography variant="caption">
          Authors:
          <ul>
            <li>Elizabete Liene Šterna 201671IVCM</li>
            <li>Gediminas Milašius 201678IVCM</li>
            <li>Marieke Jahn 201684IVCM</li>
            <li>Olivier Levasseur 201637IVCM</li>
          </ul>
        </Typography>
      </TabPanel>
    </>
  );
}
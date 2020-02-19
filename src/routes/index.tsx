import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PathFinder } from 'Pages/pathFinder';
import { SortingAlgorithms } from 'Pages/sortingAlgorithms';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: number): { id: string; 'aria-controls': string } {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    padding: 0,
    margin: 0,
    backgroundColor: 'red',
  },
}));

const components = {
  0: function(): React.FC {
    return PathFinder;
  },
  1: function(): React.FC {
    return SortingAlgorithms;
  },
};

export const AppView: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [component, setComponent] = useState(<PathFinder />);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
    setComponent(components[newValue]());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="PATH FINDER" {...a11yProps(0)} />
          <Tab label="SORTING ALGORITHMS" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {component}
    </div>
  );
};

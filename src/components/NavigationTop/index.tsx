import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel: React.FC<TabPanelProps> = (props): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const index: React.FC = (): JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {/* <Tab label="SORTING ALGORITHMS" {...a11yProps(0)} />
          <Tab label="PATH FINDER" {...a11yProps(1)} /> */}
          <Tab label="SORTING ALGORITHMS" />
          <Tab label="PATH FINDER" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        SORTING ALGORITHMS
      </TabPanel>
      <TabPanel value={value} index={1}>
        PATH FINDER
      </TabPanel>
    </>
  );
};

export default index;

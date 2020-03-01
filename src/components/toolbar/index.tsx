import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#34495e',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      height: '50px',
      minHeight: 'auto',
    },
    slider: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '250px',
      color: 'red',
    },
    divider: {
      width: '5px',
      backgroundColor: 'red',
    },
    font: {
      fontSize: '12px',
    },
    button: { display: 'flex', alignContent: 'center', height: '100%' },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const index = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <Button color="inherit">Sort!</Button>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <div className="">
          <Button color="inherit">Quick Sort</Button>
          <Button color="inherit">Merge Sort</Button>
          <Button color="inherit">Bubble Sort</Button>
          <Button color="inherit">Heap Sort</Button>
        </div>
        {/* <div className={classes.slider}>
          <Slider
            track={false}
            aria-labelledby="arr-length-slider"
            defaultValue={30}
          />
          <Typography
            id="arr-length-slider"
            gutterBottom
            className={classes.font}
          >
            Change Array Length
          </Typography>
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default index;

import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Button from 'components/button';
// import Divider from '@material-ui/core/Divider';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#34495e',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      height: '50px',
      minHeight: 'auto',
      justifyContent: 'space-around',
    },
    slider_container: {
      display: 'flex',
      alignItems: 'center',
      width: '250px',
      padding: '0 10px',
    },
    divider: {
      width: '3px',
      backgroundColor: 'red',
    },
    slider: {},
    label: { fontSize: '12px', width: 'auto' },
    button: { display: 'flex', alignContent: 'center', height: '100%' },
  })
);

const index = ({
  quickSortBtn,
  mergeSortBtn,
  bubbleSortBtn,
  resetArray,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <div>
          <Button
            onClick={quickSortBtn}
            className="js-toolbar-button"
            style={{
              color: 'inherit',
              backgroundColor: 'inherit',
              border: 'none',
              fontSize: '16px',
              fontFamliy: 'Roboto',
              padding: '6px 8px',
            }}
          >
            Quick Sort
          </Button>
          <Button
            onClick={mergeSortBtn}
            className="js-toolbar-button"
            style={{
              color: 'inherit',
              backgroundColor: 'inherit',
              border: 'none',
              fontSize: '16px',
              fontFamliy: 'Roboto',
              padding: '6px 8px',
            }}
          >
            Merge Sort
          </Button>
          <Button
            onClick={bubbleSortBtn}
            className="js-toolbar-button"
            style={{
              color: 'inherit',
              backgroundColor: 'inherit',
              border: 'none',
              fontSize: '16px',
              fontFamliy: 'Roboto',
              padding: '6px 8px',
            }}
          >
            Bubble Sort
          </Button>
          <Button
            onClick={() => alert('HEAP SORT')}
            className="js-toolbar-button"
            style={{
              color: 'inherit',
              backgroundColor: 'inherit',
              border: 'none',
              fontSize: '16px',
              fontFamliy: 'Roboto',
              padding: '6px 8px',
            }}
          >
            Heap Sort
          </Button>
        </div>
        <Button
          style={{
            color: 'inherit',
            backgroundColor: 'inherit',
            border: 'none',
            fontSize: '16px',
            fontFamliy: 'Roboto',
            padding: '6px 8px',
          }}
          onClick={resetArray}
          id="js-toolbar-reset-button"
        >
          RESET ARRAY
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default index;

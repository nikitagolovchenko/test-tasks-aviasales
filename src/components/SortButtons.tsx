import { Button, ButtonGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
    '& > *': {
      flexGrow: 1
    }
  }
}))

const SortButtons: React.FC = () => {
  const classes = useStyles();

  return (
    <ButtonGroup color='primary' className={classes.root}>
      <Button variant="contained">One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
};

export default SortButtons;

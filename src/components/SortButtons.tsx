import { Button, ButtonGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
    '& > *': {
      flexGrow: 1,
    },
  },
}));

const SortButtons: React.FC = () => {
  const classes = useStyles();

  return (
    <ButtonGroup color='primary' className={classes.root} size='large'>
      <Button variant='contained'>Самый дешевый</Button>
      <Button>Самый быстрый</Button>
      <Button>Оптимальный</Button>
    </ButtonGroup>
  );
};

export default SortButtons;

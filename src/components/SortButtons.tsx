import { Button, ButtonGroup, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ticketSorting } from '../store/actions/ticketActions';
import { RootState } from '../store/reducers/rootReducer';
import { SortBtn } from '../store/types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(3),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('xs')]: {
      '& $btn': {
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.primary.light,
        marginBottom: theme.spacing(1),
        '&:last-child': {
          marginBottom: 0
        }
      }
    },
    '& > *': {
      flexGrow: 1,
    },
  },
  btn: {
  }
}));

const SortButtons: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    sortBtns: { btns, activeBtn },
    loading,
  } = useSelector((state: RootState) => state.ticket);

  const sorting = (sort: SortBtn): void => {
    dispatch(ticketSorting(sort));
  };

  return (
    <ButtonGroup
      color='primary'
      className={classes.root}
      size='large'
      disabled={loading}
    >
      {btns.map(el => (
        <Button
          key={el.name}
          name={el.name}
          variant={el.name === activeBtn ? 'contained' : 'outlined'}
          onClick={() => sorting(el.name)}
          className={classes.btn}
        >
          {el.text}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SortButtons;

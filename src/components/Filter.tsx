import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { ticketFiltering } from '../store/actions/ticketActions';
import { FilterBtn } from '../store/types';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, filterBtns } = useSelector(
    (state: RootState) => state.ticket
  );

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(ticketFiltering(e.target.name as FilterBtn));
  };

  return (
    <Paper>
      <Box p={2}>
        <Typography variant='button'>Количество пересадок</Typography>
        {filterBtns.btns.map((el, index) => (
          <Box key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={loading}
                  checked={el.name === filterBtns.activeBtn}
                  onChange={checkHandler}
                  name={el.name}
                  color='primary'
                />
              }
              label={el.text}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default Filter;

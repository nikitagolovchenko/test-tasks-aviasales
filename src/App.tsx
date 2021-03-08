import {
  Box,
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './components/Filter';
import SortButtons from './components/SortButtons';
import Ticket from './components/Ticket';
import { RootState } from './store/reducers/rootReducer';
import { getTicket } from './store/actions/ticketActions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state: RootState) => state.ticket);

  useEffect(() => {
    dispatch(getTicket());
  }, []);

  return (
    <Box width='100%' position='relative' overflow='hidden' py={6}>
      <CssBaseline />
      {ticket.loading && (
        <Box position='absolute' top='0' left='0' width='100%' zIndex='100'>
          <LinearProgress />
        </Box>
      )}

      <Container maxWidth='md'>
        <Box mb={3} textAlign='center' component='header'>
          <img src='./logo.png' alt='aviasales' />
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Filter />
          </Grid>
          <Grid item xs={8}>
            <SortButtons />
            <Box>
              <Ticket />
              <Ticket />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;

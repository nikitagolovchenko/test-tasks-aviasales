import { Box, Container, CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import Filter from './components/Filter';
import SortButtons from './components/SortButtons';
import Ticket from './components/Ticket';

function App() {
  return (
    <Box width='100%' position='relative' overflow='hidden' py={6}>
      <CssBaseline />

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
}

export default App;

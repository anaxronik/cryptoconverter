import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RightBlock from './components/RightBlock';
import MainBlock from './components/MainBlock';

function App() {
  return (
    <Container maxWidth="lg" className='container'>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className='paper' elevation={3}>
            <MainBlock />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className='paper' elevation={3}>
            <RightBlock />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

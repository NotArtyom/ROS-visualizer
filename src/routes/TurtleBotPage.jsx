import React from 'react';
import { Navbar } from '../common';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TurtleData } from '../components';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardContent: {
    flexGrow: 1,
  },
  main: {
    minWidth: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'AppWorkspace',
  },
}));

function TurtleBotPage () {
  const classes = useStyles();
  return (
    <>
      <Navbar dark/>
      <main className={ classes.main }>
        {/* Hero unit */ }
        <Container className={ classes.cardGrid } maxWidth="md">
          <Grid container
                justify="flex-start"
                alignItems="center" spacing={ 5 }>
            <Grid item xs={ 12 }>
              <Card>
                <Button variant={ 'outlined' } color={ 'secondary' }>View Images</Button>
              </Card>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TurtleData/>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TurtleData inf/>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default TurtleBotPage;
import React from 'react';
import { Navbar } from '../common';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TurtleData } from '../components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {stop} from '../store/actions/ListItemActions'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
                <CardContent>
                  <Link component='button' variant={ 'outlined' } color={ 'secondary' } href={ '0.0.0.0:8080' }>Images
                    (0.0.0.0:8080)</Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TurtleData/>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TurtleData inf/>
            </Grid>
            <Grid item xs={ 12 }>
              <Card>
                <CardContent>
                  <Button  variant={ 'contained' } color={ 'secondary' }>STOP CONNECTION</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

const mapStateToProps = state => {
  return {msgs: state.msgs};
};

const mapDispatchToProps = (dispatch) => {
  return {
    stop: () => dispatch(stop())
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(TurtleBotPage);
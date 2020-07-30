import React from 'react';
import { Copyright, Navbar } from '../common';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { ListItem } from '../components/listItemComponent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { addItem } from '../store/actions/ListItemActions';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  main: {
    backgroundColor: '#eeeeee'
  },
}));

function ListPage (props) {
  const classes = useStyles();
  return (
    <>
      <Navbar/>
      <main className={ classes.main }>
        {/* Hero unit */ }
        <div className={ classes.heroContent }>
          <Container maxWidth="xs">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              ROS VISUALIZER
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Connect to your Robot via ROS Bridge and follow the topics and messages
            </Typography>
          </Container>
        </div>
        <Box mt={ 2 }>
          <Button about={ 'Add new Item to the list' } color='primary' onClick={ props.addItem }>+ Add new Item</Button>
        </Box>
        <Container className={ classes.cardGrid } maxWidth="md">
          <Grid container
                direction="column"
                justify="flex-start"
                alignItems="center" spacing={ 5 }>
            { props.items.map((item) => (
              <Grid item key={props.items.indexOf(item)} xs={ 12 } sm={ 12 } md={ 7 }>
                <ListItem/>
              </Grid>)
            ) }
          </Grid>
        </Container>
      </main>
      <Copyright/>
    </>
  );
}

const mapStateToProps = state => {
  return {items: state.items};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
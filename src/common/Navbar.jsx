import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { history } from '../helpers';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  window?: () => Window;
  //children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    title: {
      cursor: 'pointer',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    grow: {
      flexGrow: 1,
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${ theme.spacing(4) }px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }),
);

const OutlinedButton = withStyles({
  root: {
    background: 'transparent',
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'white',
    color: 'white',
    marginRight: 10,
    height: 40,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',

  },
})(Button);

const SimpleButton = withStyles({
  root: {
    background: 'transparent',
    color: 'white',
    marginRight: 10,
    height: 40,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',

  },
})(Button);

function ScrollTop (props: Props) {
  const {children, window} = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  };

  return (
    <Zoom in={ trigger }>
      <div onClick={ handleClick } role="presentation" className={ classes.root }>
        { children }
      </div>
    </Zoom>
  );
}

export default function Navbar (props: Props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar color={ props.dark ? 'secondary' : 'primary' }>
        <Toolbar className={ classes.title } >
          <div onClick={ () => history.push('/') }>
            { props.dark ?
              <Typography variant={ 'h4' }>Turtle Bot</Typography> :
              <Typography variant={ 'h4' }>ROS Visualizer</Typography> }
          </div>
          <div className={ classes.search }>
            <div className={ classes.searchIcon }>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={ {
                root: classes.inputRoot,
                input: classes.inputInput,
              } }
              inputProps={ {'aria-label': 'search'} }
            />
          </div>
          <div className={ classes.grow }/>
          <div>
            <OutlinedButton variant='outlined' className={ classes.title } onClick={ () => history.push('/turtle') }>
              TurtleBot
            </OutlinedButton>
            <SimpleButton variant='text' className={ classes.title } onClick={ () => history.push('/help') }>
              Quick Start
            </SimpleButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <ScrollTop { ...props }>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </React.Fragment>);
}
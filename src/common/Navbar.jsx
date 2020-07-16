import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
      cursor: 'pointer'
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
      <AppBar color={ 'primary' }>
        <Toolbar>
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
import React from 'react';
import { Navbar } from '../common';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: '#FFFFFF',
      marginTop: theme.spacing(8),
      minWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    link: {
      backgroundColor: '#FFFFFF'
    }
  }));

const HelpPage = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar/>
      <div className="col-md-6 col-md-offset-3">
        <Container component="main" maxWidth="xm">
          <CssBaseline/>
          <div>
            <Box display='flex' justifyContent='center' className={ classes.paper }>
              <Box display='flex' alignItems='center' flexDirection='row' mb={4} style={ {cursor: 'pointer'} }>
                <Typography variant="h1" className={ classes.title }>Quick Start</Typography>
              </Box>
              <Typography variant="h5" justifyContent='flex-start'> Install ROS Bridge</Typography>
              <Typography variant="h6" color='primary'> {'sudo apt-get install ros-<rosdistro>-rosbridge-server'} </Typography>
            <Box mt={4}>
              <Typography variant="h5" justifyContent='flex-start'> Run ROS Bridge</Typography>
              <Typography variant="h6" color='primary'> {'source /opt/ros/<rosdistro>/setup.bash'} </Typography>
              <Typography variant="h6" color='primary'> {'roslaunch rosbridge_server rosbridge_websocket.launch'} </Typography>
            </Box>
            </Box>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HelpPage;
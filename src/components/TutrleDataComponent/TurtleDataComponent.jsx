import React from 'react';
import { EchoTopic, ToggleConnect } from '../../ROS';
import { ROS } from '../../ROS/ROS';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => createStyles({
    cardDark: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '50vw',
      backgroundColor: '#FFFFFF',
    },
    cardMedia: {
      minHeight: '300px'
    },
  }),
);

const TurtleData = (props) => {
  const classes = useStyles();
  console.log(props.inf);
  return (
    <>
      <Card className={ classes.cardDark }>
        <CardContent>
          { !props.inf ? <ROS>
              <ToggleConnect dark/>
              <EchoTopic turtle={ true }/>
            </ROS>
            :
            <>
              <Typography variant={ 'h5' }>Turtle Data</Typography>
              <Typography variant={ 'h6' }>Data</Typography>
            </>
          }
        </CardContent>
      </Card>
    </>
  );
};

export default TurtleData;
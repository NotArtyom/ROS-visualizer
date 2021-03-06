import React from 'react';
import { EchoTopic, ToggleConnect } from '../../ROS';
import { ROS, useROS } from '../../ROS/ROS';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '50vw'
    },
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

const ListItem = (props) => {
  const classes = useStyles();
  const {url} = useROS();
  return (
    <>
      <Card className={ props.dark ? classes.cardDark : classes.card }>
        <CardContent>
          <ROS>
            {props.dark ? <ToggleConnect dark/>:<ToggleConnect/>}
            {!props.dark && <EchoTopic/>}
          </ROS>
        </CardContent>
      </Card>
    </>
  );
};

export default ListItem;
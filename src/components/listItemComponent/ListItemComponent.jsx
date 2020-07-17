import React from 'react';
import { EchoTopic, ToggleConnect } from '../../ROS';
import { ROS, useROS } from '../../ROS/ROS';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '50vw'
    },
    cardMedia: {
      minHeight: '300px'
    },
  }),
);

const ListItem = () => {
  const classes = useStyles();
  const {url} = useROS();
  return (
    <>
      <Card className={ classes.card }>
        <CardContent>
          <ROS>
            <ToggleConnect/>
            <EchoTopic/>
          </ROS>
        </CardContent>
      </Card>
    </>
  );
};

export default ListItem;
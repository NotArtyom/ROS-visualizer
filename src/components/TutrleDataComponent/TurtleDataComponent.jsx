import React from 'react';
import { EchoTopic, ToggleConnect } from '../../ROS';
import { ROS } from '../../ROS/ROS';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

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
  props.msgs.msg.twist && console.log(props.msgs.msg.twist.twist);
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
              <Typography variant={ 'h4' } color={'secondary'}>Turtle Data</Typography>
              <Typography variant={ 'h5' }>Position</Typography>
              <div style={ {display:'flex',flexDirection: 'row', justifyContent:'center'} }>
                <Typography variant={ 'h6' }>X:</Typography>
                <Typography variant={ 'h6' }>{ props.msgs.msg.pose && props.msgs.msg.pose.pose.orientation && props.msgs.msg.pose.pose.position.x }</Typography>
              </div>
              <div style={ {display:'flex',flexDirection: 'row', justifyContent:'center'} }>
                <Typography variant={ 'h6' }>Y:</Typography>
                <Typography variant={ 'h6' }>{ props.msgs.msg.pose  && props.msgs.msg.pose.pose.orientation && props.msgs.msg.pose.pose.position.y }</Typography>
              </div>
              <Typography variant={ 'h5' }>Orientation</Typography>
              <div style={ {display:'flex',flexDirection: 'row', justifyContent:'center'} }>
                <Typography variant={ 'h6' }>Z:</Typography>
                <Typography variant={ 'h6' }>{ props.msgs.msg.pose && props.msgs.msg.pose.pose.orientation && props.msgs.msg.pose.pose.orientation.z }</Typography>
              </div>
              <div style={ {display:'flex',flexDirection: 'row', justifyContent:'center'} }>
                <Typography variant={ 'h6' }>W:</Typography>
                <Typography variant={ 'h6' }>{ props.msgs.msg.pose && props.msgs.msg.pose.pose.orientation && props.msgs.msg.pose.pose.orientation.w }</Typography>
              </div>
              <div style={ {display:'flex',flexDirection: 'row', justifyContent:'center'} }>
                <Typography variant={ 'h6' }>linear vel:</Typography>
                <Typography variant={ 'h6' }>{ props.msgs.msg.pose && props.msgs.msg.twist.twist && props.msgs.msg.twist.twist.linear.x }</Typography>
              </div>
              <div style={ {display:'flex',flexDirection: 'row', justifyContent:'center'} }>
                <Typography variant={ 'h6' }>angular vel:</Typography>
                <Typography variant={ 'h6' }>{ props.msgs.msg.pose && props.msgs.msg.twist.twist && props.msgs.msg.twist.twist.angular.z  }</Typography>
              </div>
            </>
          }
        </CardContent>
      </Card>
    </>
  );
};

const mapStateToProps = state => {
  return {msgs: state.msgs};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TurtleData);
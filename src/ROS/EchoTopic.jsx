import React, { useEffect, useState } from 'react';
import { useROS } from './ROS';
import Button from '@material-ui/core/Button';
import { storeLastMsg } from '../store/actions/ListItemActions';
import { connect } from 'react-redux';

var listener = null;

function EchoTopic (props) {
  const {createListener, topics, isConnected, listeners} = useROS();
  const [lastMsg, setLastMsg] = useState(null);
  // const [messages, setMessages] = useState([]);
  const [topic, setTopic] = useState('/');
  const [queue, setQueue] = useState(0);
  const [compression, setCompression] = useState('none');

  useEffect(() => {
    handleTopic(topic);
  },);

  const unsubscribe = () => {
    if (listener) {
      // console.log('Unsubscribing');
      listener.unsubscribe();
    }
  };

  const handleTopic = (topicInput) => {
    if (topic !== topicInput) {
      setTopic(topicInput);
      unsubscribe();
      return;
    }

    unsubscribe();
    listener = null;

    for (let i in topics) {
      if (topics[i].path === topicInput) {
        listener = createListener(topics[i].path,
          topics[i].msgType,
          Number(queue),
          compression);
        break;
      }
    }

    if (listener) {
      // console.log('Subscribing to messages...');
      listener.subscribe(handleMsg);
    } else {
      console.log('Topic \'' + topic + '\' not found...make sure to input the full topic path - including the leading \'/\'');
    }
  };

  const handleQueue = (queueInput) => {
    setQueue(queueInput);
  };

  const handleCompression = (compInput) => {
    setCompression(compInput);
  };

  const handleMsg = (msg) => {
    // if (props.stop.state === false) {
    //   setTopic('');
    // }
    setLastMsg(msg);
    props.addMsg(msg);
    // console.log(msg);
  };

  return (
    <div>
      {
        !props.turtle &&
        <>
          <b>Message Queue Length: </b><input name="queueInput" defaultValue={ queue }
                                              onChange={ event => handleQueue(event.target.value) }/> <br/>
          <b>Compression: </b><input name="compInput" defaultValue={ compression }
                                     onChange={ event => handleCompression(event.target.value) }/> <br/>
        </>
      }
      <b>Topic to echo: </b>{ props.turtle ?
      <Button variant={ 'text' } disabled={ !isConnected } color={ 'secondary' }
              onClick={ () => handleTopic('/odom') }>
        /odom
      </Button>
      :
      <input
        name="topicInput" defaultValue={ topic }
        onChange={ event => handleTopic(event.target.value) }/> } <br/>
    </div>
  );
}

const mapStateToProps = state => {
  return {stop: state.stop};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMsg: (msg) => dispatch(storeLastMsg(msg))
  };
};

export default connect(mapDispatchToProps, mapDispatchToProps)(EchoTopic);
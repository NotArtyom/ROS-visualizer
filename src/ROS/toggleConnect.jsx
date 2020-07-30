import React from 'react';
import { useROS } from './ROS';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function ToggleConnect (props) {
  const {isConnected, topics, url, changeUrl, toggleConnection} = useROS();
  return (
    <div>
      <Container component="main" maxWidth="md">
        <main>
          <Box mt={ 2 } mb={ 2 }>
            <Button variant="outlined" color={ props.dark ? 'secondary' : 'primary' } disabled={ isConnected }
                    onClick={ toggleConnection }>
              { !isConnected ? 'Toggle Connect' : 'Connected' }
            </Button>
            <div style={ {flexDirection: 'row', marginTop: 20} }>
              <Typography>ROS url input: </Typography>
              <TextField variant={ 'outlined' } color={ props.dark ? 'secondary' : 'primary' }
                         name="urlInput" defaultValue={ url } onChange={ event => changeUrl(event.target.value) }/>
            </div>
            {!props.dark && <div style={ {marginTop: 20} }>
              <Typography variant={ 'h5' }>Topics detected:</Typography>
              { topics && topics.map((topic, i) => <li key={ i }>{ topic.path }</li>) }
            </div> }
          </Box>
        </main>
      </Container>
    </div>
  );
}

export default ToggleConnect;
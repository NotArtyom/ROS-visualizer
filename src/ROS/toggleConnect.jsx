import React from 'react'
import { useROS } from './ROS'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function ToggleConnect() {
  const { isConnected, topics, url, changeUrl, toggleConnection } = useROS();
  return (
    <div>
      <p>
        <Button variant="outlined" color="primary" disabled={isConnected} onClick={ toggleConnection }>{ !isConnected ? 'Toggle Connect' : 'Connected'}</Button>  <br />
       <Box mt={2} mb={2}>
        <b>ROS url input:  </b><input name="urlInput" defaultValue={ url } onChange={event => changeUrl(event.target.value)} />  <br />
        <b>ROS url to connect to:  </b> {url}  <br />
        <b>Status of ROS:</b> { isConnected ? "connected" : "not connected" }   <br />
        <b>Topics detected:</b><br />
        { topics && topics.map((topic, i) => <li key={i}>{topic.path}</li> )}
       </Box>
       </p>
    </div>
  );
}
export default ToggleConnect;
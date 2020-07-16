import React from 'react';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react'

@observer
class ListPage extends React.Component {
  render () {
    const store = this.props.store;
    return (
      <div>
        <Typography h1> List Page </Typography>
      </div>
    );
  }
}

export default ListPage;
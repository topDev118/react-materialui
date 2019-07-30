import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';

import TextField from '@material-ui/core/TextField';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Button variant = "outlined" color="#2E488A">
            <Bookmarks></Bookmarks>
          </Button><br />
          <TextField
          placeholder="Placeholder here"
          label="Basic TextField" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import './App.css';

class App extends Component {
  render() {
    return (
      <Button variant = "outlined" color="primary">
        <Bookmarks></Bookmarks>Chapter 2
      </Button>
    );
  }
}

export default App;

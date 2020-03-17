import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Test It out</h1>
      </div>
    );
  }
}

export default connect(null, {})(App);

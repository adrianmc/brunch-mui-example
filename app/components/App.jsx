import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <h2>Welcome!</h2>
        <ul>
          <li><a href="http://brunch.io">Brunch homepage</a></li>
          <li><a href="https://facebook.github.io/react/">React.js homepage</a></li>
        </ul>
      </div>
    );
  }
}

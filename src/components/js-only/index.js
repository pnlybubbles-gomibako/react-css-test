import React from 'react';

class JsOnly extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'JsOnly';
  }
  render() {
    return (
      <div>
        <h1>JSONLY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco</p>
        <ul>
          <li>Lorem ipsum dolor sit amet 1</li>
          <li>Lorem ipsum dolor sit amet 2</li>
          <li>Lorem ipsum dolor sit amet 3</li>
        </ul>
      </div>
    );
  }
}

export default JsOnly;

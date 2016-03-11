import React from 'react';
import JsOnly from './components/js-only/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return (
      <div>
        <JsOnly />
      </div>
    );
  }
}

export default App;

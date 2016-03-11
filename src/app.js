import React from 'react';
import JsOnly from './components/js-only/index';
import JsOnlyPrefixer from './components/js-only-prefixer/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return (
      <div>
        <JsOnly />
        <JsOnlyPrefixer />
      </div>
    );
  }
}

export default App;

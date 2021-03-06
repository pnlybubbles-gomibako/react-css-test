import React from 'react';
import JsOnly from './components/js-only/index';
import JsOnlyPrefixer from './components/js-only-prefixer/index';
import JsAndCss from './components/js-and-css/index';
import JsAndOuterCss from './components/js-and-outer-css/index';


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
        <JsAndCss />
        <JsAndOuterCss />
      </div>
    );
  }
}

export default App;

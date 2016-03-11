import React from 'react';
import FreeStyle from 'react-free-style';
// import StyleObj from './style';
const StyleObj = {
  container: {
    backgroundColor: "red",
  },
};
const StyleCN = {};
const Style = FreeStyle.create();
StyleCN.container = Style.registerStyle(StyleObj.container);

class JsOnly extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'JsOnly';
  }
  render() {
    return (
      <div className={StyleCN.container}>
        asd
        <Style.Element />
      </div>
    );
  }
}

export default Style.component(JsOnly);

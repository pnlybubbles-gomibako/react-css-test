import React from 'react';
import FreeStyle from 'react-free-style';
import StyleObj from './style';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss-js';

const prefixer = postcss.sync([autoprefixer]);

const StyleCN = {};
const Style = FreeStyle.create();
Object.keys(StyleObj).forEach((k, i) => {
  const v = StyleObj[k];
  StyleCN[k] = Style.registerStyle(prefixer(v));
});

console.log(StyleCN);

class JsOnly extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'JsOnly';
  }
  render() {
    return (
      <div className={StyleCN.container}>
        <h1 className={StyleCN.header}>JSONLY</h1>
        <p className={StyleCN.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <ul className={StyleCN.list}>
          <li className={StyleCN.item}>Lorem ipsum dolor sit amet 1</li>
          <li className={StyleCN.item}>Lorem ipsum dolor sit amet 2</li>
          <li className={StyleCN.item}>Lorem ipsum dolor sit amet 3</li>
        </ul>
        <Style.Element />
      </div>
    );
  }
}

export default Style.component(JsOnly);

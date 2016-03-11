import React from 'react';
import FreeStyle from 'react-free-style';
import autoprefixer from 'autoprefixer';
import postcssJs from 'postcss-js';
import postcss from 'postcss';

const cssText = `
container {
  background-color: #eee;
}

header {
  font-size: 30px;
}

description {
  padding: 10px 30px;
}

list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
}

item {
  fontSize: 12px;
}
`;

const StyleObj = postcssJs.objectify(postcss.parse(cssText));
console.log(StyleObj);

const prefixer = postcssJs.sync([autoprefixer]);

const StyleCN = {};
const Style = FreeStyle.create();
Object.keys(StyleObj).forEach((k, i) => {
  const v = StyleObj[k];
  StyleCN[k] = Style.registerStyle(prefixer(v));
});

console.log(StyleCN);

class JsAndCss extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'JsAndCss';
  }
  render() {
    return (
      <div className={StyleCN.container}>
        <h1 className={StyleCN.header}>JsAndCss</h1>
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

export default Style.component(JsAndCss);

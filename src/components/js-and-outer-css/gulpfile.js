const gulp = require('gulp');
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssJs = require('postcss-js');
const postcss = require('postcss');
const fs = require('fs');

gulp.task('default', () => {
  const cssText = fs.readFileSync(path.resolve(__dirname, './style.css')).toString();
  const styleObj = postcssJs.objectify(postcss.parse(cssText));
  const prefixer = postcssJs.sync([autoprefixer]);
  const styleObjPrefixed = {};
  Object.keys(styleObj).forEach((k, i) => {
    const v = styleObj[k];
    styleObjPrefixed[k] = prefixer(v);
  });
  const json = JSON.stringify(styleObjPrefixed, null, '  ');
  const jsFile = 'export default ' + json;
  fs.writeFileSync(path.resolve(__dirname, './style.js'), jsFile);
});

// export * from './ex1045';

const findExample = (folder ,file) => {
  return require('fs').readFileSync(`${__dirname}/${folder}/stdin/${file}`, 'utf8');
};

const verifyTypeOfTriangle = require('./ex1045');
const verifyHowMuchTheGameLasts = require('./ex1046');
module.exports = {
  path: findExample,
  ex1045: verifyTypeOfTriangle,
  ex1046: verifyHowMuchTheGameLasts
};
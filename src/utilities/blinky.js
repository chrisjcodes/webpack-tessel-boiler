const tessel = require('tessel');

export default () => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}
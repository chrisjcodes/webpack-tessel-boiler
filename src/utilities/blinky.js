const tessel = require.context('./', false, 'tessel');

export default () => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}
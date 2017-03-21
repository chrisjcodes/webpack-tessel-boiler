import tessel from 'tessel';

export default function() {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}
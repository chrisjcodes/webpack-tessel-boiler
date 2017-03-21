import tessel from 'tessel';
import blinky from 'Utilities/blinky';

tessel.led[2].on();

setInterval(blinky, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");
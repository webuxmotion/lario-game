import platformSrc from '../img/platform.png';
import hillsSrc from '../img/hills.png';
import backgroundSrc from '../img/background.png';
import { createImage } from './utils';

export default {
  platform: createImage(platformSrc),
  hills: createImage(hillsSrc),
  background: createImage(backgroundSrc),
}
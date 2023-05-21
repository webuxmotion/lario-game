import { createImage } from './utils';
import platformSrc from '../img/platform.png';
import hillsSrc from '../img/hills.png';
import backgroundSrc from '../img/background.png';
import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteRunRight from '../img/spriteRunRight.png';
import spriteStandLeft from '../img/spriteStandLeft.png';
import spriteStandRight from '../img/spriteStandRight.png';
import blocks from '../img/blocks.png';

export default {
  platform: createImage(platformSrc),
  hills: createImage(hillsSrc),
  background: createImage(backgroundSrc),
  spriteRunLeft: createImage(spriteRunLeft),
  spriteRunRight: createImage(spriteRunRight),
  spriteStandLeft: createImage(spriteStandLeft),
  spriteStandRight: createImage(spriteStandRight),
  blocks: createImage(blocks),
}
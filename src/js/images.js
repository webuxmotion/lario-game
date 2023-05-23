import { createImage } from './utils';
import platformSrc from '../img/platform.png';
import hillsSrc from '../img/hills.png';
import backgroundSrc from '../img/background.png';
import spriteMarioRunLeft from '../img/spriteMarioRunLeft.png';
import spriteMarioRunRight from '../img/spriteMarioRunRight.png';
import spriteMarioStandLeft from '../img/spriteMarioStandLeft.png';
import spriteMarioStandRight from '../img/spriteMarioStandRight.png';
import spriteMarioJumpLeft from '../img/spriteMarioJumpLeft.png';
import spriteMarioJumpRight from '../img/spriteMarioJumpRight.png';

import blocks from '../img/blocks.png';
import goomba from '../img/spriteGoomba.png';
import block from '../img/block.png';
import blockTri from '../img/blockTri.png';

export default {
  platform: createImage(platformSrc),
  hills: createImage(hillsSrc),
  background: createImage(backgroundSrc),
  spriteMarioRunLeft: createImage(spriteMarioRunLeft),
  spriteMarioRunRight: createImage(spriteMarioRunRight),
  spriteMarioStandLeft: createImage(spriteMarioStandLeft),
  spriteMarioStandRight: createImage(spriteMarioStandRight),
  spriteMarioJumpLeft: createImage(spriteMarioJumpLeft),
  spriteMarioJumpRight: createImage(spriteMarioJumpRight),
  blocks: createImage(blocks),
  goomba: createImage(goomba),
  block: createImage(block),
  blockTri: createImage(blockTri),
}
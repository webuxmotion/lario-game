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

import spriteFireFlowerRunRight from '../img/spriteFireFlowerRunRight.png'
import spriteFireFlowerRunLeft from '../img/spriteFireFlowerRunLeft.png'
import spriteFireFlowerStandRight from '../img/spriteFireFlowerStandRight.png'
import spriteFireFlowerStandLeft from '../img/spriteFireFlowerStandLeft.png'
import spriteFireFlowerJumpRight from '../img/spriteFireFlowerJumpRight.png'
import spriteFireFlowerJumpLeft from '../img/spriteFireFlowerJumpLeft.png'

import blocks from '../img/blocks.png';
import goomba from '../img/spriteGoomba.png';
import block from '../img/block.png';
import blockTri from '../img/blockTri.png';
import flower from '../img/spriteFireFlower.png';
import lgPlatform from '../img/lgPlatform.png';
import tPlatform from '../img/tPlatform.png';
import xtPlatform from '../img/xtPlatform.png';

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
  spriteFireFlowerRunLeft: createImage(spriteFireFlowerRunLeft),
  spriteFireFlowerRunRight: createImage(spriteFireFlowerRunRight),
  spriteFireFlowerStandLeft: createImage(spriteFireFlowerStandLeft),
  spriteFireFlowerStandRight: createImage(spriteFireFlowerStandRight),
  spriteFireFlowerJumpLeft: createImage(spriteFireFlowerJumpLeft),
  spriteFireFlowerJumpRight: createImage(spriteFireFlowerJumpRight),
  blocks: createImage(blocks),
  goomba: createImage(goomba),
  block: createImage(block),
  blockTri: createImage(blockTri),
  flower: createImage(flower),
  lgPlatform: createImage(lgPlatform),
  tPlatform: createImage(tPlatform),
  xtPlatform: createImage(xtPlatform),
}
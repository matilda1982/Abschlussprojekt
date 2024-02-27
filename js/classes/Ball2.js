
import Character from './Character.js';

export default class Ball2 extends Character {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  // ovdje je definirana brzina loptice

  velocity = {
    x: 2,
    y: 3
  }
}
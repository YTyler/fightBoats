import { Boat } from './boat.js';

export class Game {
  constructor() {
    this.grid =
    [['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','','']];
    
    this.boats = [new Boat(3,'horizontal'),new Boat(3,'vertical'), new Boat(2,'horizontal'), new Boat(2,'vertical')];
  }
}

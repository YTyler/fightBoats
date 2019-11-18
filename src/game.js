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
  placeBoats(){ //put boats onto grid
    this.boats.forEach((boat) => {
      let coord = [Math.floor(Math.random() * 9) , Math.floor(Math.random() * 9)]
      boat.coordinates.push(coord);

      // for (let i = 0; i < boat.size-1; i++) {
      //
      // }
    })
    return this.coordinates;
  }
}

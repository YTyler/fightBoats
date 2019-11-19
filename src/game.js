import { Boat } from './boat.js';

export class Game {
  constructor() {
    this.grid =
    [['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',],
    ['','','','','','','','','',]];

    this.boats = [new Boat(3,'horizontal'),new Boat(3,'vertical'), new Boat(2,'horizontal'), new Boat(2,'vertical')];
  }
  placeBoats(){ //put boats onto grid
    this.boats.forEach((boat) => {
      let coord = [Math.floor(Math.random() * 9) , Math.floor(Math.random() * 9)];
      boat.coordinates.push(coord);

      this.grid[coord[0]][coord[1]] = "X";
      // Future "No-Duplicate" coordinates rule
      //Future Boat Sizing
    });
    return this.coordinates;
  }
  moveBoats(){
    this.boats.forEach((boat) => {
      let move = 1;
      if (boat.orientation === 'horizontal') { //move one space right
        setInterval(() => {
          let coord = boat.coordinates[0];
          this.grid[coord[0]][coord[1]] = "";
          this.grid[coord[0]][coord[1]+ move] = "X";
          boat.coordinates[0][1] = boat.coordinates[0][1] + 1;
        }, 3000);
      }
    });
  }
}

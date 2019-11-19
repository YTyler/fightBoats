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
      boat.coordinates = coord;

      this.grid[coord[0]][coord[1]] = "X";
      // Future "No-Duplicate" coordinates rule
      //Future Boat Sizing
    });
    return this.coordinates;
  }
  moveBoats(input = -1){
    this.boats.forEach((boat) => {
      setInterval(() => {
        let direction;
        if (input === -1) {direction =  Math.floor(Math.random() * 4);}
        else {direction = input;}

        let coord = boat.coordinates;
        if (direction === 0){ //Move North
          if (boat.coordinates[0] != 0 ) {
            this.grid[coord[0]][coord[1]] = "";
            this.grid[coord[0]-1][coord[1]] = "X";
            boat.coordinates[0] = boat.coordinates[0] - 1;
          } else {
            return;
          }
        } else if (direction === 1) { //Move West
          if (boat.coordinates[1] != 0 ) {
            this.grid[coord[0]][coord[1]] = "";
            this.grid[coord[0]][coord[1] - 1] = "X";
            boat.coordinates[1] = boat.coordinates[1] - 1;
          } else {
            return;
          }
        } else if (direction === 2) {//Move East
          if (boat.coordinates[1] != 8 ) {
            this.grid[coord[0]][coord[1]] = "";
            this.grid[coord[0]][coord[1]+ 1] = "X";
            boat.coordinates[1] = boat.coordinates[1] + 1;
          } else {
            return;
          }
        } else if (direction === 3) { //Move South
          if (boat.coordinates[0] != 8 ) {
            this.grid[coord[0]][coord[1]] = "";
            this.grid[coord[0]+1][coord[1]] = "X";
            boat.coordinates[0] = boat.coordinates[0] + 1;
          } else {
            return;
          }
        }
      }, 3000);

    });
  }
}

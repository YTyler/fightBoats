import { Boat } from './boat.js';
import { Game } from './game.js';

$(document).ready(function(){

  let ocean = new Game();

  setInterval(() => { //refresh game board on interval
    for (let i = 0; i < ocean.grid.length; i++) { //run through rows
      for (let j = 0; j < ocean.grid[0].length; j++) { //run throuch columns
        if (ocean.grid[i][j] === 'X') {
          //Print a Boat Space
        } else {
          //Print a Blank Space
        }
      }
    }
  }, 100);

});

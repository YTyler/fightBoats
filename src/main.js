// import { Boat } from './boat.js';
import $ from 'jquery';
import  "./styles.css";
import { Game } from './game.js';

$(document).ready(function(){
  console.log('document ready');
  let ocean = new Game();
  ocean.placeBoats();
  let display = $('#highSeas');
  display.html('');
  // setInterval(() => { //refresh game board on interval
    for (let i = 0; i < ocean.grid.length; i++) { //run through rows

      for (let j = 0; j < ocean.grid.length; j++) { //run throuch columns

        if (ocean.grid[i][j] === 'X') {
          //Print a Boat Space
          display.append(`<div class="boat"><h2><br></h2></div>`)
        } else if (ocean.grid[i][j] === ''){
          display.append(`<div class="space"><h2><br></h2></div>`);
        }
      }
    }
    // }, 100);



  });

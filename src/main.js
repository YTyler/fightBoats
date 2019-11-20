import $ from 'jquery';
import  "./styles.css";
import { Game } from './game.js';
$(document).ready(function(){
  let ocean = new Game();
  ocean.placeBoats();
  let display = $('#highSeas');

  setInterval(() => { //refresh game board on interval
    display.html('');
    for (let i = 0; i < ocean.grid.length; i++) { //run through rows

      for (let j = 0; j < ocean.grid.length; j++) { //run throuch columns

        if (ocean.grid[i][j] === 'X') {
          //Print a Boat Space
          display.append(`<div class="boat"><h2><br><br></h2></div>`);
        } else if (ocean.grid[i][j] === ''){
          display.append(`<div class="space"><h2><br><br></h2></div>`);
        }
      }
    }
  }, 500);
  ocean.moveBoats();

  display.on('click', ".space", () =>{
    alert("No bounty for you\nSwitch Players!");
    ocean.advanceTurn();
  });

  display.on('click', ".boat", () =>{
    alert("You sank my pirate ship!!!");
    ocean.advanceTurn();
    if (this.currentPlayer === "Pirate"){
      ocean.points[0]++ ;
    } else {
      ocean.points[1]++ ;
    }
  });

  //Chuck Norris API call ===
  setInterval(() => {
    let request = new XMLHttpRequest();
    const url = `https://api.chucknorris.io/jokes/random?category=dev`;

    const getElements = (response) => {
      $('.showChuck').text(`${response.value}`);
    };


    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
  },4000);








});
// import { Boat } from './boat.js';

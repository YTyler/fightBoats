import { Boat } from './../src/boat.js';
import { Game } from './../src/game.js';

describe('Game', () => {

  const testGame = new Game();
  test('should successfully generate 1 boats array', () => {
   expect(testGame.boats[0]).toEqual(new Boat(3, "horizontal"));
   expect(testGame.boats[1]).toEqual(new Boat(3, "vertical"));
   expect(testGame.boats[2]).toEqual(new Boat(2, "horizontal"));       expect(testGame.boats[3]).toEqual(new Boat(2, "vertical"));
 });



});

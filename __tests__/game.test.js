import { Boat } from './../src/boat.js';
import { Game } from './../src/game.js';

describe('Game', () => {
  jest.useFakeTimers();
  let testGame;

  beforeEach(function() {
    testGame = new Game();

  });

  afterEach(function(){
    jest.clearAllTimers();
  });

  testGame = new Game();
  test('should successfully generate 4 boats array', () => {
    expect(testGame.boats.length).toEqual(4);
  });


  test('should successfully generate starting coordinates for 4 boats', () => {
    testGame.placeBoats();
    for(let i = 0; i< testGame.boats.length; i++){
      expect(testGame.boats[i].coordinates[0][0]).toBeLessThan(9);
      expect(testGame.boats[i].coordinates[0][0]).toBeGreaterThan(0);
      expect(testGame.boats[i].coordinates[0][1]).toBeLessThan(9);
      expect(testGame.boats[i].coordinates[0][1]).toBeGreaterThan(0);
    }
  });
  test('should succesfully move boat one space to the right after 3 seconds', () => {


      testGame.boats[0].coordinates[0][1] = 1;
      testGame.moveBoats();
      expect(testGame.boats[0].coordinates[0][1]).toEqual(2);
  });
});

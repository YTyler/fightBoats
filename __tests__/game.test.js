// import { Boat } from './../src/boat.js';
import { Game } from './../src/game.js';

describe('Game', () => {
  jest.useFakeTimers();
  let testGame;

  beforeEach(function() {
    testGame = new Game();
    testGame.placeBoats();
  });

  afterEach(function(){
    jest.clearAllTimers();
  });

  testGame = new Game();
  test('should successfully generate 4 boats array', () => {
    expect(testGame.boats.length).toEqual(4);
  });


  test('should successfully generate starting coordinates for 4 boats', () => {
    for(let i = 0; i< testGame.boats.length; i++){
      expect(testGame.boats[i].coordinates[0]).toBeLessThan(9);
      expect(testGame.boats[i].coordinates[1]).toBeGreaterThanOrEqual(0);

    }
  });
  test('should succesfully move boat one space up after 3 seconds', () => {
      let temp = testGame.boats[0].coordinates[0]
      testGame.moveBoats(0);
      jest.advanceTimersByTime(3001);
      expect(testGame.boats[0].coordinates[0]).toEqual(temp - 1);
  });
  test('should succesfully move boat one space to the left after 3 seconds', () => {
      let temp = testGame.boats[0].coordinates[1]
      testGame.moveBoats(1);
      jest.advanceTimersByTime(3001);
      expect(testGame.boats[0].coordinates[1]).toEqual(temp-1);
  });
  test('should succesfully move boat one space to the right after 3 seconds', () => {
      let temp = testGame.boats[0].coordinates[1]
      testGame.moveBoats(2);
      jest.advanceTimersByTime(3001);
      expect(testGame.boats[0].coordinates[1]).toEqual(temp+1);
  });
  test('should succesfully move boat one space up after 3 seconds', () => {
      let temp = testGame.boats[0].coordinates[0]
      testGame.moveBoats(3);
      jest.advanceTimersByTime(3001);
      expect(testGame.boats[0].coordinates[0]).toEqual(temp + 1);
  });
});

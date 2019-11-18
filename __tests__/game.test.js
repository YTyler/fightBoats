import { Boat } from './../src/boat.js';
import { Game } from './../src/game.js';

describe('Game', () => {

  // beforeEach(() => {
  //   const testGame = new Game();
  // });

  const testGame = new Game();
  test('should successfully generate 4 boats array', () => {
    expect(testGame.boats[0]).toEqual(new Boat(3, "horizontal"));
    expect(testGame.boats[1]).toEqual(new Boat(3, "vertical"));
    expect(testGame.boats[2]).toEqual(new Boat(2, "horizontal"));       expect(testGame.boats[3]).toEqual(new Boat(2, "vertical"));
  });


  test('should successfully generate starting coordinates for 4 boats', () => {
    testGame.placeBoats();
    expect(testGame.boats[0].coordinates[0][0]).toBeLessThan(9);
    expect(testGame.boats[0].coordinates[0][0]).toBeGreaterThan(0);
    expect(testGame.boats[0].coordinates[0][1]).toBeLessThan(9);
    expect(testGame.boats[0].coordinates[0][1]).toBeGreaterThan(0);

    // expect(testGame.boats[1].coordinates).toEqual(expect.arrayContaining([1,2,3,4,5,6,7,8]));
    // expect(testGame.boats[2].coordinates).toEqual(expect.arrayContaining([1,2,3,4,5,6,7,8]));
    // expect(testGame.boats[3].coordinates).toEqual(expect.arrayContaining([1,2,3,4,5,6,7,8]));
  });
});

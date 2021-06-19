import Player from "../factories/player";
import Gameboard from '../factories/gameboard'


let testPlayer;
let testEnemyBoard;

describe('player functions', () => {
    beforeEach(() => {
        testPlayer = new Player('testPlayer');
        testEnemyBoard = new Gameboard();
    });

    it('fires a shot', () => {
        testPlayer.fireShot(5, testEnemyBoard);
        expect(testEnemyBoard.board[5].isShot).toBe(true);
    });

});
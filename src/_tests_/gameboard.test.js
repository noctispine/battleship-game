// import gameboard from '../factories/gameboard'
// import shipTypes from '..'
const shipTypes = require('../gameLogic/shipTypes')
const Gameboard = require('../factories/gameboard'); 


describe('gameboard functions', () => {
    let testBoard;
    
    beforeEach(() => {
        testBoard = new Gameboard();
    });

    it('returning a cell after receiving a shot', () => {
        testBoard.receiveAttack(53);
        expect(testBoard.board[53].isShot).toBe(true);
    });

    it('returning a cell after miss a shot', () => {
        testBoard.receiveAttack(20);
        expect(testBoard.board[30].isShot).toBe(false);
    })

    it('shots a ship', () => {
        testBoard.board[30].hasShip = true;
        testBoard.receiveAttack(30);
        expect(testBoard.isShipShotted(30)).toBe(true);
    });

    it('misses a ship', () => {
        testBoard.receiveAttack(33);
        expect(testBoard.isShipShotted(33)).toBe(false);
    });

    it('places a ship to y axis', () => {
        expect(testBoard.locationsOfShip(23, shipTypes[4], 'y')).toEqual([23, 33]);
    });

    it('places a ship to x axis', () => {
        expect(testBoard.locationsOfShip(40, shipTypes[0], 'x')).toEqual([40, 41, 42, 43, 44]);
    });

    it('returns the board with a hit', () => {
        arr = [];
        for (let i = 0; i < 100; i++)
            arr.push('empty');
        
        arr[35] = 'hit';
        arr[50] = 'miss';


        testBoard.board[35] = {hasShip: true, isShot: false};
        testBoard.board[50] = {hasShip: false, isShot : true};
        testBoard.receiveAttack(35);
        expect(testBoard.oppenentBoard()).toEqual(arr);

    });

    it('returns the given locations are valid', () => {
        const firstCase = testBoard.areLocationsValid([10,11,12,13], 'x');
        expect(firstCase).toBe(true);
    });

    it('return the given locations are not valid because of the overlapping', () => {
        
        testBoard.placeShip(65, shipTypes[0], 'x');
        const firstCase = testBoard.areLocationsValid([66,67,68], 'x');
        const secondCase = testBoard.areLocationsValid([45,55,65,75,85], 'y');
        expect([firstCase, secondCase]).toEqual([false, false]);
    });

    it('gives a random location', () => {
        const mockMath = Object.create(global.Math);
        mockMath.random = () => 0.01;
        global.Math = mockMath;

        const [randomLocation, randomAxis] = testBoard.findRandomLocation(shipTypes[0]);
        // x,y
        expect([randomLocation, randomAxis]).toEqual([[1,11,21,31,41], 'y']);
    });








});
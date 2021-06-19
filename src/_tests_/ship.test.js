import ship from '../factories/ship'

describe('ship functions', () => {
    let ship1, ship2;
    beforeEach(() => {
        ship1 = new Ship('bigShip', [1,2,3,4,5]);
        ship2 = new Ship('smallOne', [14,15,16]);
    });

    it('takes a hit', () => {
        ship1.hit(4);
        expect(ship1.hits).toEqual([4]);
    });

    it('takes multiple hits', () => {
        ship2.hit(14);
        ship2.hit(16);
        expect(ship2.hits).toEqual([14, 16]);
    });

    it('the ship hasnt sunken yet', () => {
        ship1.hit(1);
        ship1.hit(2);
        ship1.hit(3);
        ship1.hit(4);
        expect(ship1.isSunk()).toBe(false);

    });

    it('the ship has sunken', () => {
        ship1.hit(1);
        ship1.hit(2);
        ship1.hit(3);
        ship1.hit(4);
        ship1.hit(5);
        expect(ship1.isSunk()).toBe(true);

    });
});
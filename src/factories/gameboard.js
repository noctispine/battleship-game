class Gameboard {
    constructor() {
        this.board = [];

        for (let i = 0; i < 100; i++)
            this.board.push({ hasShip: false, isShot: false });
    }

    

    receiveAttack(coor) {
        this.board[coor].isShot = true;
    }

    isShipShotted(coor) {
        return this.board[coor].hasShip;
    }



    // latter it should be locationArray

    locationsOfShip(location, ship, axis) {
        const locations = [];
                
        for (let i = 0; i < ship.length; i++) {
            axis === 'x' ? locations.push(location + i) : locations.push(location + i * 10)
        }

        return locations;
    }
    
    placeShip(location, ship , axis) {
        const locations = this.locationsOfShip(location, ship, axis);
        
        if (this.areLocationsValid(locations, axis)) {
            for (let coor of locations) {
                this.board[coor].hasShip = true;
            }

            return true;
        }

        return false;
    }

    areLocationsValid(locations, axis) {
        const boundariesX = [9, 19, 29, 39, 49, 59, 69, 79, 89 ,99];
        const boundariesY = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];



        // true means, there is overlap.

        // check boundaries
        if (axis === 'x') {
            if (boundariesX.some(boundary => [boundary, boundary + 1].every(num => locations.includes(num)))) return false;
        }

        else {
            if (boundariesY.some(boundary => [boundary, boundary + 10].every(num => locations.includes(num)))) return false;    
        }

        // check overlapping
        if (locations.some(location => this.board[location].hasShip)) return false;

        return true;
    }


    findRandomLocation(shipType) {
        let locations = [];
        
        for(let i = 0; i < 100; i++) {
            const randomLocation = parseInt(Math.random() * 100, 10);
            const randomAxis = parseInt(Math.random() * 2, 10) % 2 ? 'x' : 'y';
            locations = this.locationsOfShip(randomLocation, shipType, randomAxis);
            if(this.areLocationsValid(locations, randomAxis)) return [locations, randomAxis];
        }

    }

    oppenentBoard() {
        return this.board.map((cell) => {
            return cell.isShot && cell.hasShip ? "hit" : cell.isShot ? "miss" : 'empty'
        })
    }

    
}

export default Gameboard;



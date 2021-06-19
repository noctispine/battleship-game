class Ship {
    constructor(type, position) {
        this.type = type;
        this.position = position;
        this.hits = [];
    }   

    hit(coor) {
        console.log('hitsss');
        this.hits.push(coor); 
    }

    isSunk() {
        return this.position.every( (cell) => this.hits.includes(cell) );
    }

}

export default Ship;
function computerTurn(dispatch, human) {
    randomLocation = parseInt(Math.random() * 100 % 100, 10);
    
    if (human.gameboard.board[randomLocation].hasShip && !human.gameboard.board[randomLocation].isShot) {
        const ships = [...human.ships];
        const targetShip = ships.find(ship => ship.position.find(pos => pos === randomLocation));
        targetShip.hit(randomLocation);

        dispatch( {type: 'SET_SHIP_HITS', payload: {targetPlayer: 'human', targetShip, targetShipHits: targetShip.hits}} )
        // Later it will replace with an ai
        
        setTimeout(() => {
            dispatch( {type: 'FIRE_SHOT', payload: {player: 'computer', location: randomLocation}} );
            dispatch( {type: 'SET_TURN', payload: 0} );            
        },1500);
    }
}


export default computerTurn;
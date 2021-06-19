import checkWinner from './checkWinner'

function humanTurn(dispatch, index, computer) {
    
    if (computer.gameboard.board[index].hasShip && !computer.gameboard.board[index].isShot) {
        const ships = [...computer.ships];
        const targetShip = ships.find(ship => ship.position.find(pos => pos === index));
        console.log(targetShip);
        targetShip.hit(index);

        dispatch( {type: 'SET_SHIP_HITS', payload: {targetPlayer: 'computer', targetShip ,targetShipHits: targetShip.hits }} )
    }

    

    dispatch( {type: 'FIRE_SHOT', payload: {player: 'human', location: index}} );
    dispatch( {type: 'SET_TURN', payload: 1} );
    
};


export default humanTurn;
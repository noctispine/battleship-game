import checkWinner from './checkWinner'

function humanTurn(dispatch, index, computer, checkWinner) {
    
    if (computer.gameboard.board[index].hasShip && !computer.gameboard.board[index].isShot) {
        const ships = [...computer.ships];
        const targetShip = ships.find(ship => ship.position.find(pos => pos === index));
        console.log(targetShip);
        targetShip.hit(index);

        dispatch( {type: 'SET_SHIP_HITS', payload: {targetPlayer: 'computer', targetShip ,targetShipHits: targetShip.hits }} )
    }

    if (!computer.gameboard.board[index].isShot){
        dispatch( {type: 'SET_TURN', payload: 1} );

    }

    dispatch( {type: 'FIRE_SHOT', payload: {player: 'human', location: index}} );
    if(checkWinner(computer)) dispatch( {type: 'SET_WINNER', payload: 'human'}  );
    
};


export default humanTurn;
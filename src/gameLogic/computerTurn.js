


function computerTurn(dispatch, human, randomLocation, checkWinner) {
           
    if (human.gameboard.board[randomLocation].hasShip && !human.gameboard.board[randomLocation].isShot) {
        const ships = [...human.ships];
        const targetShip = ships.find(ship => ship.position.find(pos => pos === randomLocation));
        console.log(targetShip);
        targetShip.hit(randomLocation);

        dispatch( {type: 'SET_SHIP_HITS', payload: {targetPlayer: 'human', targetShip ,targetShipHits: targetShip.hits }} )
    }

    
    
    dispatch( {type: 'FIRE_SHOT', payload: {player: 'computer', location: randomLocation}} );
    dispatch( {type: 'SET_TURN', payload: 0} );

    if(checkWinner(human)) dispatch( {type: 'SET_WINNER', payload: 'computer'}  );


}


    



export default computerTurn;
function reducer(state, action) {
    switch(action.type) {
        case 'SET_PLAYERS': {
            return {...state, players: action.payload};
        }

        case 'SET_PLAYER_SHIPS' : {
            let newState = {...state};
            newState.players.human.ships = action.payload;
            return newState;
        }

        case 'SET_COMPUTER_SHIPS': {
            let newState = {...state};
            newState.players.computer.ships = action.payload;
            return newState;
        }

        case 'FIRE_SHOT' : {
            const {player, location} = action.payload;
            let targetPlayer = player === 'computer' ? 'human' : 'computer';
            let newState = {...state};
            console.log(newState.players[player]);
            newState.players[player].fireShot(location, newState.players[targetPlayer].gameboard)
            return newState;
        }

        case 'SET_SHIP_HITS' : {
            const {targetPlayer, targetShip, targetShipHits} = action.payload;
            let newState = {...state};
            newState.players[targetPlayer].ships.find(ship => ship.type.name === targetShip.type.name).hits = targetShipHits;
            return newState;
        }

        case 'SET_WINNER' : {
            const winner = action.payload === 'human' ? 'human' : 'computer';
            return {...state, winner: winner};
        }

        case 'SET_TURN' : {
            return {...state, turn: action.payload};
        }

        case 'SET_RESET' : {
            const newState = {
                players: {},
                turn: 0,
                winner: ''
            };
            
            return newState;
        }
        
        default: return state;
    }
}

export default reducer
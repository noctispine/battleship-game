
import shipTypes from './shipTypes';
import Ship from '../factories/ship';

function placeComputerShips(dispatch, computer) {

    const {gameboard} = computer;

    let ships = [];

    for (let shipType of shipTypes) {
        const [randomLocations, randomAxis] = gameboard.findRandomLocation(shipType);
        ships.push(new Ship(shipType, randomLocations));
        gameboard.placeShip(randomLocations[0], shipType, randomAxis);
    }
    

    
    
    dispatch({type: 'SET_COMPUTER_SHIPS', payload: ships})
    


}

export default placeComputerShips;
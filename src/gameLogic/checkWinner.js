function checkWinner(player) {
    if (player.ships.every(ship => ship.isSunk())) return true;
    return false;
}

export default checkWinner
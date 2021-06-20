import React, { useContext, useEffect } from 'react'
import { data } from '../../StateControl'
import { SetupGridContainer, GameBoardGrid, Cell, HitMark } from '../styled-components/boardStyles'
import placeComputerShips from '../../gameLogic/placeComputerShips'
import humanTurn from '../../gameLogic/humanTurn'
import checkWinner from '../../gameLogic/checkWinner'

const EnemyBoard = ({setPage}) => {
    const { state, dispatch } = useContext(data);
    const enemyBoard = state.players.computer.gameboard;

    useEffect(() =>  {
        placeComputerShips(dispatch, state.players.computer);
    },[]);

    const handlePlayerShot = (pos) => {
        if (state.turn === 0) {
            if(state.winner !== '') {
                // latter, it would be replaced with a pop-up 
                setPage(2);
            }
            else {
                humanTurn(dispatch, pos, state.players.computer);
                console.log(state);
            }
        }    

    }
    
    return (
        <SetupGridContainer>
        <GameBoardGrid>
            {
                enemyBoard.board.map((cell, index) => {
                    return (<Cell
                    key={index}
                    board='enemy'
                    onClick={() => handlePlayerShot(index, enemyBoard)}
                    shot={cell.isShot}
                    hasShip={cell.hasShip}
                    >
                        <HitMark shot={cell.isShot}/>
                    </Cell>)
                })
            }
        </GameBoardGrid>
        </SetupGridContainer>
    )
}

export default EnemyBoard

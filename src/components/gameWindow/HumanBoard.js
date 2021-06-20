import React, { useContext, useEffect } from 'react'
import {data} from '../../StateControl'
import { SetupGridContainer, GameBoardGrid, Cell, HitMark } from '../styled-components/boardStyles';
import computerTurn from '../../gameLogic/computerTurn';


const HumanBoard = ({ setPage }) => {
    const {state, dispatch} = useContext(data);
    console.log(state.players.human);

    useEffect(() => {
        if (state.turn === 1) {
            if (state.winner !== '') {
                // latter, it would be replaced with a pop-up
                setPage(2);
            }
            else {

                while (true) {
                    const randomLocation = parseInt(Math.random() * 100, 10);
                    if (!state.players.human.gameboard.board[randomLocation].isShot) {
                        computerTurn(dispatch, state.players.human, randomLocation);
                        break;
                    }

                }

            } 
        }
    }, [state.turn])

    return (
            <GameBoardGrid>
                {
                    state.players.human.gameboard.board.map((cell, index) => {
                        return (
                            <Cell
                            key={index}
                            board='friendly'
                            hasShip={cell.hasShip}
                            >
                                <HitMark shot={cell.isShot} />
                            </Cell>
                        )
                    })
                }
            </GameBoardGrid>
    )
}

export default HumanBoard

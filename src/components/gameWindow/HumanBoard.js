import React, { useContext, useEffect } from 'react'
import {data} from '../../StateControl'
import { SetupGridContainer, GameBoardGrid, Cell, HitMark } from '../styled-components/boardStyles';
import computerTurn from '../../gameLogic/computerTurn';


const HumanBoard = ({ setPage }) => {
    const {state, dispatch} = useContext(data);

    useEffect(() => {
        if (state.turn === 1) {
            computerTurn(dispatch, state.players.human);
        }
    }, [state.turn])

    return (
        <SetupGridContainer>
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
        </SetupGridContainer>
    )
}

export default HumanBoard

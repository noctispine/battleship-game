import React, { useState, useEffect, useContext } from 'react'
import EnemyBoard from './EnemyBoard'
import { data } from '../../StateControl'
import Home from './Home'
import PlayerBoardSetup from './PlayerBoardSetup'
import HumanBoard from './HumanBoard'
import { GameWrapper } from '../styled-components/boardStyles'

const GameContainer = () => {

    const { state } = useContext(data);

    const [page, setPage] = useState(0);


    switch (page) {
        case 0: {
            return <Home setPage={setPage} ></Home> 
        }

        case 1: {
            return <PlayerBoardSetup setPage={setPage} /> ;

        }

        case 2: {
            return  (<GameWrapper>
                <HumanBoard setPage={setPage} />
                <EnemyBoard setPage={setPage} />
            </GameWrapper>);

        }

        case 3: {
            return <p>You won.</p>

        }
        default: return <Home setPage={setPage} /> 

    }






}

export default GameContainer

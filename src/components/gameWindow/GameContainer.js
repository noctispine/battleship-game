import React, { useState, useContext } from 'react'
import EnemyBoard from './EnemyBoard'
import { data } from '../../StateControl'
import Home from './Home'
import PlayerBoardSetup from './PlayerBoardSetup'
import HumanBoard from './HumanBoard'
import { GameWrapper } from '../styled-components/boardStyles'
import ResetPopup from './ResetPopup'

const GameContainer = () => {

    const { state } = useContext(data);
    const [showResetPopup, setShowResetPopup] = useState(false);
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
                {showResetPopup && <ResetPopup setPage={setPage} setPopup={setShowResetPopup}/>}
                <HumanBoard setPopup={setShowResetPopup} />
                <EnemyBoard setPopup={setShowResetPopup} />
            </GameWrapper>);

        }

        default: return <Home setPage={setPage} /> 

    }






}

export default GameContainer

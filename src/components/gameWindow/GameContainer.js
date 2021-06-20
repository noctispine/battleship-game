import React, { useState, useEffect, useContext } from 'react'
import EnemyBoard from './EnemyBoard'
import { data } from '../../StateControl'
import Home from './Home'
import PlayerBoardSetup from './PlayerBoardSetup'
import HumanBoard from './HumanBoard'

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
            return  (<>
                <HumanBoard setPage={setPage} />
                <EnemyBoard setPage={setPage} />
            </>);

        }

        case 3: {
            return <p>You won.</p>

        }
        default: return <Home setPage={setPage} /> 

    }






}

export default GameContainer

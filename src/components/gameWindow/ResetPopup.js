import React, { useContext } from 'react'
import {PopupContainer, ResetButton, PopupWrapper } from '../styled-components/resetPopupStyles' 
import { data } from '../../StateControl'


const ResetPopup = ({setPage, setPopup}) => {

    const {dispatch, state} = useContext(data);
    
    const handleReset = () => {
        dispatch( {type: 'SET_RESET',} );
        setPopup(0);
        setPage(0);
    }

    return (
            <PopupContainer>
            <PopupWrapper>
                <h2>{state.winner === 'human' ? 'YOU WON' : 'YOU LOST'}</h2>
                <ResetButton onClick={handleReset}>RESET</ResetButton>
            </PopupWrapper>
            </PopupContainer>
    )
}

export default ResetPopup

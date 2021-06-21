import React, { useContext } from 'react'
import { PopupWrapper, PopupContainer, ResetButton } from '../styled-components/resetPopupStyles' 
import { data } from '../../StateControl'
import { SetupGridContainer } from '../styled-components/boardStyles';


const ResetPopup = ({setPage}) => {

    const {dispatch, state} = useContext(data);
    
    const handleReset = () => {
        dispatch( {type: 'SET_RESET',} );
        setPage(0);
    }

    return (
        <PopupWrapper>
            <PopupContainer>
                <h2>{state.winner === 'human' ? 'WIN' : 'LOSE'}</h2>
                <ResetButton onClick={handleReset}>RESET</ResetButton>
            </PopupContainer>
        </PopupWrapper>
    )
}

export default ResetPopup

import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

const data = createContext();



const StateControl = ({children}) => {

    const initialState = {
        players: {},
        turn: 0,
        winner: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <data.Provider value={ {state, dispatch} }>
            {children}
        </data.Provider>
    )
}

export default StateControl;
export { data };

import React, {useContext, useState, useEffect} from "react";
import {data} from '../../StateControl';
import Player from '../../factories/player'
import {  FormWrapper, StyledForm, StyledInput, PrimaryButton } from "../styled-components/homeStyles";

const Home = ({setPage}) => {
    const [playerName, setPlayerName] = useState('');
    const [showError, setShowError] = useState(false);
    const {dispatch, state} = useContext(data);
    
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerName.trim() !== '') {
          setShowError(false);

          const players = {human: new Player(playerName), computer: new Player()};
          dispatch({type: 'SET_PLAYERS', payload: players});
  
          
          setPage(1);
    
        }
    
        else setShowError('true');
    
      }  
    


  return (
    <FormWrapper>
    <div className='typewritter'>
      <h2>Enter Your Name</h2>
    </div>
      <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            value={playerName}
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          ></StyledInput>
        <PrimaryButton type="submit">Start</PrimaryButton>
      </StyledForm>
      {showError && <h3>There should be a name</h3>}
    </FormWrapper>
  );
};

export default Home;

import React, { useContext, useState, useEffect } from "react";
import { data } from "../../StateControl";
import {
    SetupGridContainer,
    GameBoardGrid,
    Cell,
} from "../styled-components/boardStyles";
import { SetupContainer,
         AxisButton,
} from "../styled-components/setupPlayerBoardStyles";  

import shipTypes from "../../gameLogic/shipTypes";
import Ship from "../../factories/ship";



const PlayerBoardSetup = ({ setPage }) => {
    const [shipLaunchCount, setShipLaunchCount] = useState(0);
    const [axis, setAxis] = useState("x");
    const {state, dispatch} = useContext(data);
    const [ships, setShips] = useState([]);
    

    // i had to call dispatch in the useEffect otherwise, in the below 
    // launchHumanShip function invokes dispatch twice and 
    // it causes some problems.

    useEffect(() => {
        dispatch( {type: 'SET_PLAYER_SHIPS', payload: ships} );
    }, [shipLaunchCount]); 


    useEffect(() => {
        if (shipLaunchCount === shipTypes.length) {
            setTimeout(() => {
                setPage(2);
            }, 1500);
        } 
    }, [shipLaunchCount]);

    const launchHumanShip = (pos) => {
        const human = state.players.human;
        if (shipLaunchCount < shipTypes.length) {
            const newLocations = human.gameboard.locationsOfShip(pos, shipTypes[shipLaunchCount], axis);
            const isShipLaunched = human.gameboard.areLocationsValid(newLocations, axis);
            
            human.gameboard.placeShip(
                pos,
                shipTypes[shipLaunchCount],
                axis
            );


            if (isShipLaunched) {
                
                const newShip = new Ship(shipTypes[shipLaunchCount], human.gameboard.locationsOfShip(pos, shipTypes[shipLaunchCount], axis));
                ships.push(newShip);

                setShipLaunchCount(shipLaunchCount + 1);
            }
        }

    };

    return (
        <SetupContainer>
            <AxisButton
                type="button"
                onClick={() => setAxis(axis === "x" ? "y" : "x")}
            >
                {axis}
            </AxisButton>

                <GameBoardGrid>
                    {state.players.human.gameboard.board.map((cell, index) => {

                        return (
                            <Cell
                                key={index}
                                board="friendly"
                                hasShip={cell.hasShip}
                                onClick={() => launchHumanShip(index)}
                            ></Cell>
                        );
                    })}
                </GameBoardGrid>
        </SetupContainer>
    );
};

export default PlayerBoardSetup;

import styled from "styled-components"

const PopupWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(0,0,0, 0.8);
    z-index: 100;
    
    h2 {
        font-size: 2em;
    }
` 

const PopupContainer = styled.div`
    position: relative;
    left: 25%;
    top: 25%;
    width: 50%;
    background-color: white;
    border: 3px solid black;
    border-radius: 2px;
    
`

const ResetButton = styled.button`
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    border: none;
    display: inline-block;
    cursor: pointer;
    color: white;
    background-color: rgba(0,0,0, 0.5);
    transition: 0.4s ease-in-out;


    &:hover {
        background-color: rgba(255,255,255, 0.5);    
        color: black;
    }
`

export {PopupContainer,
        ResetButton,
        PopupWrapper
    }
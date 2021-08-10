import styled from "styled-components";

const SetupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;  
    margin-bottom: 10rem;
`

const AxisButton = styled.button`
    margin-top: 2rem;
    margin-bottom: 3rem;    
    text-transform: uppercase;
    text-decoration: none;
    background-color: black;
    color: white;
    border: 4px solid #494949;
    display: inline-block;
    margin-top: 4rem;
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;

    transition: 0.4s;

    &:hover {
        color: white;
        background: black;
        border-color: black;
        transition: 0.4s;
    }

	@media (max-width: 1350px) {
        padding: 1rem;
        font-size: 1.5rem;
        margin-top: 3rem;
        margin-bottom: 0;
    }

`

export {SetupContainer, AxisButton}
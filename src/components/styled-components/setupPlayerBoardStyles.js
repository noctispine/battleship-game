import styled from "styled-components";

const SetupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

const AxisButton = styled.button`
    margin-top: 2rem;
    text-transform: uppercase;
    text-decoration: none;
    background: #f6b93b;
    border: 4px solid #494949;
    display: inline-block;
    margin-top: 4rem;
    padding: 1.5rem;
    font-size: 2rem;
    cursor: pointer;

    transition: 0.4s;

    &:hover {
        color: white;
        background: black;
        border-color: black;
        transition: 0.4s;
    }

`

export {SetupContainer, AxisButton}
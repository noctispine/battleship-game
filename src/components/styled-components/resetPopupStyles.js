import styled, {keyframes} from "styled-components"


const fadeInBg = keyframes`
    from {
        background-color: rgba(0,0,0 , 0);
    }

    to {
        background-color: rgba(0,0,0 , .8);
    }
`

const PopupContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeInBg} 3s ease-in-out;  

    @media (max-width: 1350px) {
        height: 140vh;
    }  
`

const PopupWrapper = styled.div`
    background-color: rgba(0, 78, 137, .8);
    position: absolute;
    top: 20%;
    width: 50%;
    margin: 0 auto;
    ${'' /* animation: ${fadeInBg} 3s ease-in-out; */}
    box-shadow: 5px 6px 10px 0;

    h2 {
        color: white;
        font-size: 2em;
    }

	@media (max-width: 1350px) {
        top: 30%;
    }
`

const ResetButton = styled.button`
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    border: none;
    display: inline-block;
    cursor: pointer;
    color: white;
    background-color: rgba(0,0,0, .9);
    transition: 0.4s ease-in-out;
    margin-bottom: 1.5rem;


    &:hover {
        background-color: rgba(255,255,255, 0.5);    
        color: black;
    }
`

export {PopupContainer,
        ResetButton,
        PopupWrapper
    }
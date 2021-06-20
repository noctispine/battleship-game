import styled, {keyframes} from "styled-components";

const moveUp = keyframes`
    from {
        transform: scale(1.5) translate(0, 50%);
        opacity: 0;
    }

    50% {
        tranform: scale(2) translate(0, 0);

    }

    75% {
        transform: scale(1.5) translate(0, 25%);
    }

    to {
        transform: scale(1) translate(0, 0);
    }   
` 


const HeaderContainer = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

`

const Logo = styled.img`
    margin-top: 3rem;
    height: 8rem;
    @media (max-width: 1024px) {
        height: 5rem;
        width: 10rem;
    }

    animation: ${moveUp} 5s ease-out;


`

export {
    HeaderContainer,
    Logo
}
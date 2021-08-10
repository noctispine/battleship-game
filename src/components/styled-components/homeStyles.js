import styled, {keyframes} from "styled-components";


const PrimaryButton = styled.button`
    background-color: black;
    text-align: center;

    text-decoration: none;
    border: none;
    color: white;
    padding: 1rem 1.8rem;
    font-size: 2.5rem;
    @media (max-width: 1350px) {
        font-size: 1.5rem;
        padding: .8rem 1.2rem;
    }

`

const StyledInput = styled.input`
    height: 2rem;
    font-size: 1.5rem;
    width: 60%;
    text-align: center;
    
    &:focus {
        border: 1px solid #555;
    }
}
`

const typing = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`

const blinkCaret = keyframes`
    from, to {border-color: transparent}
    50% {border-color: white}
`

const FormWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    
    div.typewritter {
        padding: 1rem 2rem;
        background-color: black;
        margin-bottom: 2rem;

        h2 {
            color: white;
            overflow: hidden;
            border-right: .05em solid white;
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: .15em;
            animation: ${typing} 2s steps(40, end), ${blinkCaret} .75s step-end infinite;
        }        
    }

`

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

    > * {
        margin: 1rem ;
    } 

`

export {FormWrapper, StyledForm, StyledInput ,PrimaryButton}
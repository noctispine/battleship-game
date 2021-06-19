import styled from "styled-components";

const PrimaryButton = styled.button`
    background-color: black;
    text-align: center;

    text-decoration: none;
    border: none;
    color: white;
    padding: 1rem 1.8rem;
    font-size: 2.5rem;


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
const FormWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
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
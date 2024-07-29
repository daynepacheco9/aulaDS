import styled from 'styled-components'

export const PagCont = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    width: 25vw;
    height: 32vh;
    /* margin: 20vh auto; */
`

export const Title = styled.h1`
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: end;
`


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export const InfoInput = styled.label`
    width: 20vw;
`

export const Input = styled.input`
    border: none;
    border-radius: 10px;
    width: 20vw;
    height: 40px;
`

export const Button = styled.button`
    background-color: cornflowerblue;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 10px;
    width: 70px;
    font-size: 16px;
`

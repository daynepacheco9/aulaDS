import { FormContainer, Title, InfoInput, InputContainer, Input,Button, Form } from "./style";

const FormLogin = () => {
    return(
        <>
            <FormContainer>
                <Form>
                    <Title>Login</Title>
                    <InputContainer>
                        <InfoInput>Username:</InfoInput>
                        <Input type="text"></Input>
                    </InputContainer>
                    <InputContainer>
                        <InfoInput>Password:</InfoInput>
                        <Input type="password"></Input>
                    </InputContainer>
                    <Button>Enter</Button>
                </Form>
            </FormContainer>
        </>
    )
}

export default FormLogin;
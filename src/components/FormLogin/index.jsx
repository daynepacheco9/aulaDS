import { FormContainer, Title, InfoInput, InputContainer, Input,Button, Form , PagCont} from "./style";

const FormLogin = () => {
    return(
        <>
            <PagCont>
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
            </PagCont>
        </>
    )
}

export default FormLogin;
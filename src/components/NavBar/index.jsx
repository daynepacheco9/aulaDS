import { NavContainer , Icon, Title} from "./styles";
import Ursinho from "/mascara-de-urso.png"
import Logout from "/sair-do-usuario.png"

const NavBar = () => {
    return(
        <>
            <NavContainer>
                <Icon src={Ursinho} ></Icon>
                <Title>Aula Nicolas</Title>
                <Icon src={Logout}></Icon>
            </NavContainer>
        </>
    )
}

export default NavBar;
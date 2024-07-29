import { NavContainer , Icon, Title} from "./styles";
import Ursinho from "/mascara-de-urso.png"


const NavBar = () => {
    return(
        <>
            <NavContainer>
                <Icon src={Ursinho} ></Icon>
                <Title>Aula Nicolas</Title>
                <h2></h2>
            </NavContainer>
        </>
    )
}

export default NavBar;
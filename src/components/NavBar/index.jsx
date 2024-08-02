
import Ursinho from "/mascara-de-urso.png"


const NavBar = () => {
    return(
        <>
            <div className="flex justify-around items-center w-full h-11 bg-[#16a34a] bottom-0">
                <img className="h-7 w-7" src={Ursinho} alt="" />
                <h1 className=" text-base"> Aula Nicolas</h1>
                <h2></h2>
            </div>
        </>
    )
}

export default NavBar;
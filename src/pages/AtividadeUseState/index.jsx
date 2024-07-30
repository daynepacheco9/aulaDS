import React,{useState} from "react"
import "./styles.css"

const AtividadeUseState = (props) =>{
    const [view ,setView]= useState(true);
    const [changeColor, setChangeColor] = useState('white')
    const [cont , setCont] = useState(0)
    const [name, setName] = useState('');

    const handleColor = () =>{
        setChangeColor(e => e == "white" ? "green" : "white")
    }

    const handleCont = () => {
        setCont(cont + 1);
    }

    const handleInputName = () => {
        setName()
    }



    return(
        <>
        <div id="pageContainer">
            { view && <p>Se clicar no "ok" eu sumo</p>}
            <button onClick={() => setView(!view)}>OK</button> 
        </div>
        <div style={{background: changeColor}}>
            <p>Agora é pra mudar o meu fundinho</p>
            <button onClick={handleColor}>Muda a Cor</button>
        </div>
        <div>
            <p>contando {cont}</p>
            <button onClick={handleCont}> +1 </button>
        </div>
        <div>
            <form>
                <label>Insira seu Nome:</label>
                <input type="text" onChange={() => setName(name)}/>
                <button onClick={() => setName(name)} >enviado</button>
            </form>

            <p onChange={name}>Bem-vindo, {name}</p>
        </div>
        </>
    )
}

export default AtividadeUseState
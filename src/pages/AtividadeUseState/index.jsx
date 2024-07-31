import React,{useState, useEffect} from "react"
import "./styles.css"

const AtividadeUseState = () =>{
    const [view ,setView]= useState(true);
    const [changeColor, setChangeColor] = useState('white')
    const [cont , setCont] = useState(0)
    const [name, setName] = useState('');
    const [today, setDate] = React.useState(new Date());

    const handleColor = () =>{
        setChangeColor(e => e == "white" ? "green" : "white")
    }

    const handleCont = () => {
        setCont(cont + 1);
    }

    useEffect(() => {
        const timer = setInterval(() => { 
        setDate(new Date());
      }, 1000);
      return () => {
        clearInterval(timer); 
      }
    }, []);

    const formatTime = (d) => {
        return d.toLocaleTimeString();
    }



    return(
        <>
        <div id="pageContainer">
            { view && <p>Se clicar no ok eu sumo</p>}
            <button onClick={() => setView(!view)}>OK</button> 
        </div>
        <div style={{background: changeColor}}>
            <p>Agora é pra mudar o meu fundinho</p>
            <button onClick={handleColor}>Muda a Cor</button>
        </div>
        <div>
            <p>{formatTime(today)}</p>
        </div>
        <div>
            <p>contando {cont}</p>
            <button onClick={handleCont}> +1 </button>
        </div>
        <div>
            <form>
                <label>Insira seu Nome:</label>
                <input type="text" onChange={e => setName(e.target.value)} />
                <button>enviado</button>
            </form>

            <p>Bem-vindo, {name}</p>
        </div>
        </>
    )
}

export default AtividadeUseState
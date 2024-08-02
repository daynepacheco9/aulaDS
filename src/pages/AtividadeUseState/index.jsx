import React,{useState, useEffect} from "react"
import "./styles.css"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const AtividadeUseState = () =>{
    const [view ,setView]= useState(true);
    const [changeColor, setChangeColor] = useState('#16a34a')
    const [cont , setCont] = useState(0)
    const [name, setName] = useState('');
    const [today, setDate] = React.useState(new Date());

    const handleColor = () =>{
        setChangeColor(e => e == "#16a34a" ? "#047857" : "#16a34a")
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
        <div className="h-screen bg-slate-50">
            <NavBar/>
            <div className=" flex justify-start m-full h-19 p-5 w-screen">
                <p className="text-xl font-bold">Bem-vindo, </p><p className="text-xl text-green-500"> {name}</p>
            </div>
            <div className="flex justify-center gap-4 items-center flex-wrap h-5/6 ">
                <div className="flex justify-center items-center flex-col bg-emerald-700 rounded-lg p-3 gap-2 w-72 h-32 shadow-2xl ">
                    { view && <p className="text-white" >Se clicar no ok eu sumo</p>}
                    <button  className=" bg-[#f2f2f2] rounded-lg p-1 w-3/5" onClick={() => setView(!view)}>OK</button> 
                </div>
                <div style={{background: changeColor}} className="flex justify-center items-center flex-col rounded-lg p-3 gap-2 w-72 h-32 shadow-2xl ">
                    <p className="text-white">Agora é pra mudar o meu fundinho</p>
                    <button className=" bg-[#f2f2f2] rounded-lg p-1 w-3/5" onClick={handleColor}>Muda a Cor</button>
                </div>
                <div className="flex justify-center items-center flex-col bg-emerald-700 rounded-lg p-3 gap-2 w-72 h-32 shadow-2xl ">
                    <p className="text-white">{formatTime(today)}</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-emerald-700 rounded-lg p-3 gap-2 w-72 h-32 shadow-2xl ">
                    <p className="text-white">contando {cont}</p>
                    <button className=" bg-[#f2f2f2] rounded-lg p-1 w-3/5" onClick={handleCont}> +1 </button>
                </div>
                <div className="flex justify-center items-center flex-col bg-emerald-700 rounded-lg p-3 gap-2 w-72 h-32 shadow-2xl ">
                    <form className="flex justify-center items-center flex-col gap-2">
                        <label className="text-white">Insira seu Nome:</label>
                        <input className=" bg-[#f2f2f2] rounded-lg p-1" type="text" onChange={e => setName(e.target.value)} />
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default AtividadeUseState
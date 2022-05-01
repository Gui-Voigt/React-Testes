import Button from '../components/Button'
import {useState} from 'react'

function Evento (){
    const [ativacoes, setAtivacoes] = useState(0)
    function meuEvento(){
        setAtivacoes(ativacoes+1)
        console.log("Opa, fui ativado"+ativacoes+"x!")
    }


    return(
        <>
        
        <p> Clique para dispara um evento: </p>
        <Button text="Ativar" event={meuEvento} />    
        
        <p>Ativações: {ativacoes}</p>  
        </>
    )
}

export default Evento
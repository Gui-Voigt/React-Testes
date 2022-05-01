import Saudacao from '../components/Saudacao'
import SeuNome from '../components/SeuNome'
import {useState} from 'react'

function StateLift (){
    
    const [nome, setNome] = useState()

    return(
        <>
          <h2> State Lift </h2>
          <SeuNome setNome = {setNome}/>
          <Saudacao nome = {nome}/>
        </>
    )
}

export default StateLift
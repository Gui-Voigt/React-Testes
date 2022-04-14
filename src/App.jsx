import './App.css'
import '../index.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Conditional from './components/Conditional'
import OutraLista from './components/OutraLista'
import SeuNome from './components/SeuNome'
import {useState} from 'react'
import Saudacao from './components/Saudacao'

const meusItens = ['React', 'Vue', 'Angular']  

function App() {
  const [nome, setNome] = useState()

  return (
    <div>
      <HelloWorld/>
      <SayMyName name="Guilherme"/>
      <List/>

      <hr></hr>

      <h1> TESTANDO EVENTOS </h1>
      <Evento/>

      <hr></hr>
      <Form/>

      <hr></hr>
      <h2> Renderização condicional </h2>
      <Conditional/>

      <hr></hr>
      <h2> Renderização de Listas </h2>
      <OutraLista itens={meusItens}> Lista de frameworks/biblotecas:</OutraLista>
      <OutraLista itens={[]}> Lista vazia:</OutraLista>
   
      <hr></hr>
      <h2> State Lift </h2>
      <SeuNome setNome = {setNome}/>
      <Saudacao nome = {nome}/>


    </div>
  )
}

export default App

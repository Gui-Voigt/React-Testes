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

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

const meusItens = ['React', 'Vue', 'Angular']  

function App() {
  const [nome, setNome] = useState()

  return (
      <div>
        <Router>

        <ul>
          <li> 
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>

        </Router>

        <hr></hr><hr></hr>

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

      </div>
  )
}

export default App

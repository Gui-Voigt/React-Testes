import './App.css'
import '../index.css'
import Presentation from './components/Presentation'

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import HelloWorld from './pages/HelloWorld'
import Lista from './pages/Lista'
import Evento from './pages/Evento'
import Form from './pages/Form'
import Conditional from './pages/Conditional'
import RenderListas from './pages/RenderListas'
import StateLift from './pages/StateLift'



function App() {

  return (
      <div>
        <Router>

        <ul>
          <li> 
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/helloWorld">Hello World</Link>
          </li>
          <li>
            <Link to="/lista">Lista</Link>
          </li>
          <li>
            <Link to="/evento">Evento</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/conditional">Enviar E-mail</Link>
          </li>
          <li>
            <Link to="/renderList">Listas Renderizadas</Link>
          </li>
          <li> 
            <Link to="/stateLift">Saudacao</Link>
          </li>
        </ul>

        <Presentation/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/helloWorld" element={<HelloWorld/>}/>
          <Route path="/lista" element={<Lista/>}/>
          <Route path="/evento" element={<Evento/>}/>
          <Route path="/cadastro" element={<Form/>}/>          
          <Route path="/conditional" element={<Conditional/>}/>
          <Route path="/renderList" element={<RenderListas/>}/>
          <Route path="/stateLift" element={<StateLift/>}/>
        </Routes>

        </Router>

      </div>
  )
}

export default App

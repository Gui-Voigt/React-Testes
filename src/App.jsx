import './App.css'
import '../index.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Conditional from './components/Conditional'


function App() {
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
    </div>
  )
}

export default App

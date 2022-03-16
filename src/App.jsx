import './App.css'
import '../index.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {
  return (
    <div>
      <HelloWorld/>
      <SayMyName name="Guilherme"/>
    </div>
  )
}

export default App

import './App.css'
import '../index.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import List from './components/List'

function App() {
  return (
    <div>
      <HelloWorld/>
      <SayMyName name="Guilherme"/>
      <List/>
    </div>
  )
}

export default App

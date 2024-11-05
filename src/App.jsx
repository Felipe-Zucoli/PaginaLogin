import './App.css'
import Home from './Home/Home'
import { HashRouter } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

function App() {


  return (
    <div>
      <NavBar /> 
      <Home />
    </div>
  )
}

export default App

import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import Apps from './Pages/Apps/Apps';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/apps' element={<Apps/>}/>
        </Routes>
      </div>
  )
}

export default App

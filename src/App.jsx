import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </div>
  )
}

export default App

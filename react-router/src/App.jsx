import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import All from "./All";

//Used pages imported
import FullStack from "./FullStackDevlopment";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Career from "./Career";
import './App.css'


function App() {

  return (

    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/full-stack-development' element={<FullStack />} />
          <Route path='/data-science' element={<DataScience />} />
          <Route path='/cyber-security' element={<CyberSecurity />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App

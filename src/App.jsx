import './App.css'
import TypingEffect from './components/TypingEffect'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import ProjectList from './components/ProjectList';
function App() {
  

  return (
   
    
    <Router>
      <Routes>
        <Route path='/' element={<TypingEffect />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Projects' element={<ProjectList />}/>
        
      </Routes>
    </Router>
   
  )
}

export default App

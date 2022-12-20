import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Experiencia from './pages/Experiencia';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {}
      <Router>
        <Navbar/>
          <Routes>

            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/experiencia" element={<Experiencia />} />

          </Routes>
        
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Experiencia from './pages/Experiencia';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProyectoDisplay'

function App() {
  return (
    <div className="App">
      {}
      <Router>
        <Navbar/>
        
          <Routes>

            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyecto/:id" element={<ProjectDisplay/ >} />
            <Route path="/experiencia" element={<Experiencia />} />

          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

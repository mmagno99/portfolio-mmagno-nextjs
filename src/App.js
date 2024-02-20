import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Experiencia from './pages/Experiencia';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProyectoDisplay';
import BlogDisplay from './pages/BlogDisplay';

import OptionCards from './pages/OptionCard';
import ProyectosLaborales from './pages/PLaboral';
import LaboralDisplay from './pages/LaboralDisplay';

function App() {
  return (
    <div className="App">
      {}
      <Router>
        <Navbar/>
        
          <Routes>

            <Route path="/" element={<Inicio />} />

            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyecto/:id" element={<ProjectDisplay />} />

            <Route path="/bbx" element={<ProyectosLaborales />} />
            <Route path="/bbxs/:id" element={<LaboralDisplay />} />

            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogDisplay />} />
            <Route path="/opciones" element={<OptionCards />} />

          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

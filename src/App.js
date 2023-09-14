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
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogDisplay />} />

          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

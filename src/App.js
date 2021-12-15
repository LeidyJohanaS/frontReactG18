import './App.css';
import Navbar from './ciclo4/components/shared/Navbar';
import Rutas from `./Rutas`;

function App() {
  return (
    <div className="md:flex min-h-screen" >
      < Navbar/>
     <Rutas/>
  </div>
  );
}

export default App;

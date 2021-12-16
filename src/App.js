import "./App.css";
import Navbar from "./ciclo4/components/shared/Navbar";
import Rutas from "./Rutas";
function App() {
  return (
    <div className="md:flex min-h-screen">
      <div className="container-fluid">
      <div className="row">
      <Navbar />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="row">
      <Rutas />
      </div>
      
    </div>
      
    </div>
  );
}

export default App;

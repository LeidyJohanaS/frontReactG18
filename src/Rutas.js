import { Routes, Route } from 'react-router';
import Index from './ciclo4/components/pages/Index';
import CoorZona from './ciclo4/components/pages/CoorZona';
import Asesor from './ciclo4/components/pages/Asesor';
import Main from './ciclo4/components/pages/Main';
import OrdenPedido from './ciclo4/components/pages/OrdenPedido';
import ProductosADM from './ciclo4/components/pages/ProductosADM';
import UsuariosADM from './ciclo4/components/pages/UsuariosADM';
import DetallesCoorZona from './ciclo4/components/pages/DetallesCoorZona';
function Rutas(){
    return <div className="md:w-2/5 xl:w-4/5 p-6"> 
    <Routes>
	                <Route path="/" exact element={<Index/>}/>
                    <Route path="/Asesor" exact element={<Asesor/>}/>
                    <Route path="/Main" exact element={<Main/>}/>
                    <Route path="/OrdenPedido" exact element={<OrdenPedido/>}/>
	                <Route path="/ProductosADM" exact element={<ProductosADM/>}/>
                    <Route path="/UsuariosADM" exact element={<UsuariosADM />}/>
                    <Route path="/DetallesCoorZona" exact element={<DetallesCoorZona/>}/>
                    <Route path="/CoorZona" exact element={<CoorZona/>} />
	            </Routes>
     </div>
}
export default Rutas;
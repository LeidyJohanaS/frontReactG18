import "../../styles/Style.css"
import NavIndex from "../shared/NavIndex"
const Index = () => (
    <>
    <NavIndex />
       <div id="login">
        </div>
        <div className="sidenav">
            <div className="login-main-text">
            </div>
        </div>
        <div className="main">
            <div className="col-md-6 col-sm-12">
                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" id="useremail" placeholder="E-mail" required maxLength="50"/> 
                            <span id="badEmail" className="badEmail"></span>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" required maxLength="50"/>
                        </div>
                        <button type="button" name="submit" className="btn btn-black btn-md">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>


    </>
)
export default Index
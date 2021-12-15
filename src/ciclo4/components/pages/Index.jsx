import "../../styles/Style.css"

const Index = () => (
    <>
       <div id="login">
        </div>
        <div class="sidenav">
            <div class="login-main-text">
            </div>
        </div>
        <div class="main">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="email" class="form-control" id="useremail" placeholder="E-mail" required maxlength="50"/> 
                            <span id="badEmail" class="badEmail"></span>
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" id="password" placeholder="Contraseña" required maxlength="50"/>
                        </div>
                        <button type="button" name="submit" class="btn btn-black btn-md" onclick="login()">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>


    </>
)
export default Index
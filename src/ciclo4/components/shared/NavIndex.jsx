import logo from '../../styles/img/logo1.jpeg';
const NavIndex = () => (
    <>
        <nav className="navbar navbar-dark fixed-top" style={{backgroundColor: '#863c59'}}>
                <div className="container-fluid">
                    <a  className="navbar-brand p1" href="index.html">
                        <img src={logo} alt="Trulli" width="40" height="40"/> Willy Wonka</a>
                </div>
            </nav>
    </>
)
export default NavIndex
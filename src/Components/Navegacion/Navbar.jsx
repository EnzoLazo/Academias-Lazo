import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import logo from '../../assets/image/carrito.png';
import logoOnix from '../../assets/image/logoonix.png';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/' > <img src={logoOnix} alt='logo' width='50px' height='50px' /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/peluqueria'>Peluqueria</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/barberia'>Barberia</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/manicura'>Manicura</Link>
                            </li>
                        </ul>
                        <CartWidget icon={logo} alt={'a'} width={'30px'}  />
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Navbar
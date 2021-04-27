import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <input type="text" placeholder="Buscar"/>
                    </li>
                </ul>
            </div>
            <div className="nav__right">
                <ul>
                    <li>+</li>
                    <li>
                        <Link to="/completed">Tareas Completadas</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
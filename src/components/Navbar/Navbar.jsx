import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <input
                            type="text"
                            placeholder="Buscar"
                            onChange={(ev)=> props.changeSearchInput(ev.target.value)}
                            value={props.searchInput}
                        />
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
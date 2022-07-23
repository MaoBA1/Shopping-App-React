import './style/style.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
        <ul className="nav-Links">
            <Link className="link-Item" to='/admin'>
                <li><h3>Admin</h3></li>
            </Link>

            <Link className="link-Item" to='/'>
                <li><h3>Home</h3></li>
            </Link>

            <Link className="link-Item" to='/stats'>
                <li><h3>Stats</h3></li>
            </Link>
        </ul>
    </nav>
    
  );
}

export default Nav;

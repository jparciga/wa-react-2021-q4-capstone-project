import logo from '../../logo.svg'
import './Header.css'

const Header = () => (
    <div className="header">
        <nav className="navbar">
            <div className="brand">
                <img id="logo" src={logo} alt="logo"/>
                <h2>La Mueblería</h2>
                <form>
                    <input type='text' placeholder="Busca tus productos" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    </div>
)

export default Header;
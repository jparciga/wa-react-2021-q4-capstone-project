import Logo from '../../components/logo/Logo'
import './header.scss'
import cart from '../../cart.png'

export default function Header(){
    
    return (
        <div className="header">
            <Logo size="50"></Logo>
            <input className="ipt" type="text" placeholder="Search product"></input>
            <img className="cart" src={cart} alt="cart"></img>
        </div>
    )
}
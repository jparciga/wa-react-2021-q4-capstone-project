import classnames from "classnames";
import styles from "./Header.module.scss";
import logo from "./img/logo.svg";
import { MdShoppingCart, MdOutlineSearch } from "react-icons/md";
import { useContext } from "react";
import Context from "../../context/Context";

const Header = () => {
  const {setShowPage} = useContext(Context);
  return (
    <header className={classnames(styles.header)}>
      <div onClick={_=>setShowPage('home')} className={classnames(styles.headerLogo)}>
        <img src={logo} alt="logo" />
      </div>

      <ul>
        <li className={classnames(styles.headerSearch)}>
          <MdOutlineSearch className={classnames(styles.headerIconSearch)} />
          <input placeholder="Search..." type="search" />
        </li>
        <li>
          <MdShoppingCart className={classnames(styles.headerIconShop)} />
        </li>
      </ul>
    </header>
  );
};

export default Header;

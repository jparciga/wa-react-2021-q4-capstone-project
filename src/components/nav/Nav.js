import classNames from "classnames";
import { useContext } from "react";
import Context from "../../context/Context";
import styles from "./Nav.module.scss";

const Nav = (elements) => {
  const { setWriteFilter } = useContext(Context);

  const handleNav = (idCat, e) => {
    setWriteFilter(idCat);

    document.querySelectorAll(".removeNavColor").forEach((item) => {
      item.style = `border-color:rgba(0, 0, 17, 0.19);
      color:rgba(0, 0, 17, 0.6);`;
    });

    e.target.style = `border-color:#FFAC12;
                      color:#FFAC12;`;
  };

  return (
    <nav className={classNames(styles.nav)}>
      <ul>
        {elements.results.length > 0
          ? elements.results.map((item) => (
              <li
                className="removeNavColor"
                onClick={(e) => handleNav(item.id, e)}
                key={item.id}
              >
                {item.data.name}
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Nav;

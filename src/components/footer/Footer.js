import classnames from "classnames";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={classnames(styles.footer)}>
      <small>
        © Ecommerce created during Wizeline’s Academy React Bootcamp
      </small>
    </div>
  );
};

export default Footer;

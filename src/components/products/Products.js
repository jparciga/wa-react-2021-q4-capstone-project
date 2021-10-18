import classnames from "classnames";
import styles from "./Products.module.scss";

const Products = (item) => {
  const { name, price, mainimage } = item.data;

  return (
    <div className={classnames(styles.productsCard)}>
      <div className={classnames(styles.productsCardImgContainer)}>
        <img src={mainimage.url} title={mainimage.alt} alt={mainimage.alt} />
      </div>

      <div className={classnames(styles.productsCardInfo)}>
        <h4>{name}</h4>

        <h2>{`$${price}`}</h2>
      </div>
    </div>
  );
};

export default Products;

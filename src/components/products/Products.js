import classnames from "classnames";
import { useContext } from "react";
import Context from "../../context/Context";
import styles from "./Products.module.scss";

const Products = (item) => {

  const { name, price, mainimage,category} = item.data;
  const {carousel} = useContext(Context); 

  return (
    <div className={classnames(styles.productsCard)}>
      <div className={classnames(styles.productsCardImgContainer)}>
        <img src={mainimage.url} title={mainimage.alt} alt={mainimage.alt} />
      </div>

      <div className={classnames(styles.productsCardInfo)}>
        <h4>{name}</h4>

        <span>{carousel.results.find(cat=>cat.id===category.id).data.name}</span>
        <h2>{`$${price}`}</h2>
      </div>
    </div>
  );
};

export default Products;

import classnames from "classnames";
import styles from "./Categories.module.scss";

const Categories = (item) => {
  const { main_image, name } = item.data;

  return (
    <div className={classnames(styles.homeCategoriesCard)}>
      <img src={main_image.url} alt={main_image.alt} title={main_image.alt} />
      <h1>{name}</h1>
    </div>
  );
};

export default Categories;

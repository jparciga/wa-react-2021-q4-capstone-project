import classnames from "classnames";
import { useContext } from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Context from "../../context/Context";
import styles from "./Home.module.scss";

const Home = () => {
  const { slider, carousel, products } = useContext(Context);

  return (
    <section className={classnames(styles.home)}>
      <div className={classnames(styles.homeBannerContainer)}>
        {slider.results.length > 0
          ? slider.results.map((item) => <Banner key={item.id} {...item} />)
          : null}
      </div>

      <div className={classnames(styles.homeCategories)}>
        {carousel.results.length > 0
          ? carousel.results.map((item) => (
              <Categories key={item.id} {...item} />
            ))
          : null}
      </div>
      <div className={classnames(styles.homeProducts)}>
        {products.results.length > 0
          ? products.results.map((item) => <Products key={item.id} {...item} />)
          : null}
      </div>
    </section>
  );
};

export default Home;

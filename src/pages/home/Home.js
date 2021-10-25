import classnames from "classnames";
import { useContext } from "react";
import Button from "../../components/button/Button";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Slider from "../../components/Slider/Slider";
import Context from "../../context/Context";
import styles from "./Home.module.scss";

const Home = () => {
  const { slider, carousel, products,setShowPage,setWriteFilter } = useContext(Context);

  return (
    <section className={classnames(styles.home)}>
      <Slider list={slider.results} />

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
      <div className={classnames(styles.homeBtnAllProducts)}>
        <Button title="View all products" setList={setWriteFilter} action={setShowPage} />
      </div>
    </section>
  );
};

export default Home;

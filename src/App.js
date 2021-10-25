import styles from "./Styles.module.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import classnames from "classnames";
import Context from "./context/Context";
import ProductList from "./pages/products/ProductList";
import { useContext } from "react";


function App() {

  const {showPage} = useContext(Context);
 
  return (
    <div className={classnames(styles.wrapper)}>
   

      <Header />
     {showPage==='home'?
      <Home />
     :<ProductList/>
  }
      
      <Footer />
     
    </div>
  );
}

export default App;

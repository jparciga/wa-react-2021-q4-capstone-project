import styles from "./Styles.module.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import classNames from "classnames";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className={classNames(styles.wrapper)}>
      <ContextProvider>
      <Header />
      <Home />
      <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;

import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./containers/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Content from './containers/Content';
import Footer from "./containers/Footer";

import Home from "pages/Home";
import Products from "pages/Products";

function App() {
  const [page, setPage] = useState('home');

  return (<>
    <GlobalStyle />
    <Header>
      <Logo goHome={() => setPage("home")} />
      <Search />
      <Cart />
    </Header>
    <Content>
      {page === "home" && <Home setPage={setPage} />}
      {page === "products" && <Products setPage={setPage} />}
    </Content>
    <Footer>
      <p style={{ marginTop: "5rem" }}>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </Footer>
  </>);
}

export default App;

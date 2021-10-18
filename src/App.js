import GlobalStyle from "./components/GlobalStyle";
import Header from "./containers/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Content from './containers/Content';
import Footer from "./containers/Footer";
import Home from "./pages/Home";

function App() {
  return (<>
    <GlobalStyle />
    <Header>
      <Logo />
      <Search />
      <Cart />
    </Header>
    <Content>
      <Home />
    </Content>
    <Footer>
      <p style={{ marginTop: "5rem" }}>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </Footer>
  </>);
}

export default App;

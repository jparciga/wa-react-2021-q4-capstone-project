import Header from "./containers/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Footer from "./containers/Footer";
import Home from "./pages/home";

function App() {
  return (<>
    <Header>
      <Logo />
      <Search />
      <Cart />
    </Header>
    <Home />
    <Footer>
      <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </Footer>
  </>);
}

export default App;

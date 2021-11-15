//import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import List from './containers/productList/ProductList';
import BannerSlider from './containers/Banner/BannerSlider';
import CategoriesSlider from './containers/CategoriesSlider/CategoriesSlider';
import Footer from './containers/Banner/Footer';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return(
    <div>
      <table>
        <tr>
        <td>
    <BannerSlider ></BannerSlider>
    <CategoriesSlider/>
    <List></List></td>
    </tr><tr>
    <td> <Footer text="Ecommerce created during Wizeline’s Academy React Bootcamp"></Footer></td>
    </tr>
    </table>
   
    </div>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;

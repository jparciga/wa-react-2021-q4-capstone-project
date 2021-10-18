import "./App.scss";
import Navheader from "./components/navheader/Navheader";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import { slides } from './data/banners'

function App() {
  
  return (
    <div className="App">
      <Navheader></Navheader>
      <Home slides={slides.results}></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;

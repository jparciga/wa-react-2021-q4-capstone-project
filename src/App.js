import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import GlobalStyle from './GlobalStyle';
import '@fontsource/metropolis';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
      {/*<Footer />*/}
    </div>
  );
}

export default App;

import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import GlobalStyle from './GlobalStyle';
import '@fontsource/metropolis';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;

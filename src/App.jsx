import './App.css';

// Components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HeroImage from './components/HeroImage/HeroImage.jsx';
import GameList from './components/GameList/GameList.jsx';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroImage />
      <SearchBar />
      <GameList />
      <Footer />
    </div>
  );
};

export default App;

import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// Pages
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { useAppContext } from './context/AppContext';
import { useEffect } from 'react';
import { fetchGames } from './api/fetchGames';

const App = () => {
  const { setGameList } = useAppContext();
  useEffect(() => {
    (async () => {
      const response = await fetchGames();
      setGameList(response);
    })();
  }, [setGameList]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

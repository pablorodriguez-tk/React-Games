import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);
const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [gameFiltered, setGameFiltered] = useState([]);

  const props = {
    cart,
    setCart,
    gameList,
    setGameList,
    gameFiltered,
    setGameFiltered,
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
};

export { Provider, useAppContext };

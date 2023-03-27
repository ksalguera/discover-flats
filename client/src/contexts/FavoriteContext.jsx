import { createContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await fetch('/favorites');
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setFavorites(json);
    }
    fetchFavorites().catch(error => error.message)
  }, [])

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export { FavoriteContext, FavoriteContextProvider };
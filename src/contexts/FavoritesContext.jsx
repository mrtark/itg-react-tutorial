import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (product) => {
        setFavorites([...favorites, product])
    }

    const removeFromFavorites = (product) => {
        setFavorites(favorites.filter(x => x.id !== product.id))
    }

    const clear = () => {
        setFavorites([])
    }

    return <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clear }}>
        {children}
    </FavoritesContext.Provider>


}
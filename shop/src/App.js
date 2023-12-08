import React from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.jsx"
import Drawer from "./components/Drawer.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";

const itemsUrl = 'http://localhost:3001/items';
const cartUrl = 'http://localhost:3001/cart';
const favoriteUrl = 'http://localhost:3001/favorite';


export default function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const[searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get(itemsUrl).then(res => {
      setItems(res.data);
    });
    axios.get(cartUrl).then(res => {
      setCartItems(res.data);
    });
    axios.get(favoriteUrl).then(res => {
      setFavorites(res.data);
    });
  }, []);

  

  const onAddToCart = (obj) => {
    const itemInCart = cartItems.find(item => item.id === obj.id);
    if (itemInCart) {
      return;
    }

    axios.post(cartUrl, obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`${cartUrl}/${id}`)
    .then(() => {
      setCartItems((prev) => prev.filter(item => item.id !== id));
    })
    .catch((error) => {
      console.error('Error deleting item from cart:', error);
    });
  };

  const onAddToFavorite = (obj) => {
    const itemInFavorite = favorites.find(item => item.id === obj.id);
    if (itemInFavorite) {
      return;
    }

    axios.post(favoriteUrl, obj);
    setFavorites((prev) => [...prev, obj]);
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>} 

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path={"/"} exact
        element={
          <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearchInput={onSearchInput} 
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          onRemoveItem={onRemoveItem}
          cartItems={cartItems}/>
        }>
        </Route>
      </Routes>

      <Routes>
        <Route path={"/favorite"} exact
        element={
          <Favorites 
            items={favorites}
          />
        }>

        </Route>
      </Routes>
    
    </div>
  );
}


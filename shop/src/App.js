import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';
// import AuthRootComponent from './pages/auth';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/registr';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') === "true");
  const [userName, setUserName] = React.useState('');
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
  async function fetchData(){
    try {
      setIsLoading(true);
      
      const cartResponse = await axios.get('http://localhost:3001/cart');
      const favoritesResponse = await axios.get('http://localhost:3001/favorites');
      const itemsResponse = await axios.get('http://localhost:3001/items');
      const usersResponse = await axios.get('http://localhost:3001/users');
      

      setIsLoading(false);
      
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
      setUsers(usersResponse.data);
    } catch (error) {
      alert("Ошибка, повторите позже");
      console.log(error);
    }
  }
    fetchData();
    }, []);


  const usersLogIn = async (obj) => {
    try{
      if(users.find((item) => item.login === obj.login)){
        // await axios.post(`http://localhost:3001/users`, obj);
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        navigate('/');
      }
      else {
        setIsLoggedIn(false);
        alert('Такого пользователя не существует, перейдите в раздел регистрации.')
      } 
    } catch (error){
      alert('Ошибка авторизации');
      console.log(error);
    }
    
  }

  const onAddToCart = (obj) => {
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
      axios.delete(`http://localhost:3001/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    }
    else{
      axios.post('http://localhost:3001/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`http://localhost:3001/favorites/${obj.id}`);
    } else {
      const { data } = await axios.post('http://localhost:3001/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    }
  };

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
  return cartItems.some(obj => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems, onAddToCart, isLoggedIn, setIsLoggedIn, userName, setUserName, usersLogIn}}>
      <div className="wrapper clear">
      <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened} />
      <Header onClickCart={() => setCartOpened(true)}/>
      <Routes>
        <Route path="/" element={<Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearchInput={onSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />} />
        
        <Route exact path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      </div>
    </AppContext.Provider>
    );
}
export default App;
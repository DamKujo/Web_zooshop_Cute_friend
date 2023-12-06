import React from "react";
import axios from "axios";
import Card from "./components/Card"
import Header from "./components/Header.jsx"
import Drawer from "./components/Drawer.jsx";

const itemsUrl = 'http://localhost:3001/items';
const cartUrl = 'http://localhost:3001/cart';
const favoriteUrl = 'http://localhost:3001/favorite';


export default function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartFavorite, setCartFavorite] = React.useState([]);
  const[searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get(itemsUrl).then(res => {
      setItems(res.data);
    });
    axios.get(cartUrl).then(res => {
      setCartItems(res.data);
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
    const itemInFavorite = cartFavorite.find(item => item.id === obj.id);
    if (itemInFavorite) {
      return;
    }

    axios.post(favoriteUrl, obj);
    setCartFavorite((prev) => [...prev, obj]);
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>} 

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'В наличии'}</h1>
          <div className="search-block d-flex">
            <img src="./../images/Search.svg" alt="Search"/>
            {searchValue && (<img onClick={() => setSearchValue('')} className="clear cu-p" src="./../images/cart/btn-remove.svg" alt="clear"/>)}  
            <input onChange={onSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
             key={index} 
             name={item.name} 
             price={item.price} 
             imageUrl={item.imageUrl} 
             onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            onRemove={(id) => onRemoveItem(id)}
            cartItems={cartItems}/>
            
          ))}
          {/* <Card title={`Котенок "Сфинкс"`} price={499} imageUrl="./../images/items/cats/sfinks.jpg"/> */}
        </div>
      </div>
    </div>
  );
}


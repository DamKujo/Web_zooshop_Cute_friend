import React from "react";
import Card from '../components/Card';



function Home({
  items,
  searchValue,
  setSearchValue,
  onSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
}) {


const renderItems = ()=>{
  const filtredItems= items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  
  return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
    <Card
      key={index}
      onFavorite={(obj) => onAddToFavorite(obj)}
      onPlus={(obj) => onAddToCart(obj)}
      loading={isLoading}
      {...item}
    />
    ));
};

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'В наличии'}</h1>
        <div className="search-block d-flex">
          <img src="./../images/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="./../images/cart/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input onChange={onSearchInput} value={searchValue.length >= 20 ? ((e) => e.preventDefault()) : searchValue} placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">
          {renderItems()
          }
      </div>
    </div>
    );
}

export default Home;


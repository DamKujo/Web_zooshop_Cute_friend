import Card from "../components/Card";
export default function Home({items, searchValue, setSearchValue, onSearchInput, onAddToFavorite, onAddToCart, onRemoveItem, cartItems}) {
    return(
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
        </div>
      </div>
    );
}
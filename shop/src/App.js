import React from "react";
import Card from "./components/Card"
import Header from "./components/Header.jsx"
import Drawer from "./components/Drawer.jsx";

const arr = [
  {
    name: `Щенок "Корги"`,
    price: 599,
    imageUrl: "./../images/items/dogs/korgi.avif",
  },
  {
    name: `Котенок "Сфинкс"`,
    price: 499,
    imageUrl: "./../images/items/cats/sfinks.jpg",
  },
  {
    name: `Кролик "Вислоухий"`,
    price: 399,
    imageUrl: "./../images/items/rabbits/rabbit.jpg",
  },
  {
    name: `Щенок "Овчарка"`,
    price: 599,
    imageUrl: "./../images/items/dogs/ovcharka.jpg",
  },
  {
    name: "Хомяк",
    price: 49,
    imageUrl: "./../images/items/hamster/hamster.jpg",
  },
  {
    name: "Марштышка",
    price: 899,
    imageUrl: "./../images/items/monkey/monkey.jpg",
  },
  {
    name: "Котенок Мейн-кун",
    price: 699,
    imageUrl: "./../images/items/cats/mejnkun.jpg",
  },
  {
    name: "Котенок Бурма",
    price: 799,
    imageUrl: "./../images/items/cats/burma.jpg",
  },
  {
    name: "Щенок Хаски",
    price: 599,
    imageUrl: "./../images/items/dogs/haski.jpg",
  },
]

export default function App() {

  const [cartOpened, setCartOpened] = React.useState(false);



  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>} 

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">В наличии</h1>
          <div className="search-block d-flex">
            <img src="./../images/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl}/>
          ))}
          {/* <Card title={`Котенок "Сфинкс"`} price={499} imageUrl="./../images/items/cats/sfinks.jpg"/> */}
        </div>
      </div>
    </div>
  );
}


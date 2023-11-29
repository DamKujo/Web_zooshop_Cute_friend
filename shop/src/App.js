import Card from "./components/Card.jsx"
import Header from "./components/Header.jsx"
import Drawer from "./components/Drawer.jsx";

export default function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">В наличии</h1>
          <div className="search-block d-flex">
            <img src="./../images/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}


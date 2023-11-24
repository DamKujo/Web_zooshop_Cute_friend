export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex alig-center">
          <img width={40} height={40} src="./../images/logo/cat.svg"/>
          <div>
            <h3 className="text-uppercase">Милый питомец</h3>
            <p className="opacity-5">Больше, чем друг</p>
          </div>
        </div>
        
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="./../images/box.svg"/>
              <span>$ 500</span>
            </li>
            <li>
              <img width={18} height={18} src="./../images/user.svg"/>
            </li>
          </ul>
      
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">В наличии</h1>
          <div className="search-block d-flex">
            <img src="./../images/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite"> 
              <img src="./../images/heart-unlike.svg" alt="Unlike"/>
            </div>
            <img width={127} height={160} src="./../images/items/dogs/korgi.avif" alt=""/>
            <h5>Щенок "Корги"</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>$ 599</b>
              </div>
              <button>
                <img width={11} height={11} src="./../images/Plus!.svg" alt=""/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={127} height={160} src="./../images/items/cats/sfinks.jpg" alt=""/>
            <h5>Котенок "Сфинкс"</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>$ 499</b>
              </div>
              <button>
                <img width={11} height={11} src="./../images/Plus!.svg" alt=""/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={127} height={160} src="./../images/items/rabbits/rabbit.jpg" alt=""/>
            <h5>Кроллик "Вислоухий"</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>$ 399</b>
              </div>
              <button>
                <img width={11} height={11} src="./../images/Plus!.svg" alt=""/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={157} height={160} src="./../images/items/dogs/ovcharka.jpg" alt=""/>
            <h5>Щенок "Овчарка"</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>$ 599</b>
              </div>
              <button>
                <img width={11} height={11} src="./../images/Plus!.svg" alt=""/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


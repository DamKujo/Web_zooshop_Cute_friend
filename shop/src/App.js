export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex alig-center">
          <img width={40} height={40} src="./../images/logo/cat.svg"/>
          <div>
            <h3 className="text-uppercase">Милый питомец</h3>
            <p>Больше, чем друг</p>
          </div>
        </div>
        
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="./../images/box.svg"/>
              <span>500$</span>
            </li>
            <li>
              <img width={18} height={18} src="./../images/user.svg"/>
            </li>
          </ul>
      
      </header>
      <div className="content p-40">
        <h1 className="">В наличии</h1>
      </div>
    </div>
  );
}


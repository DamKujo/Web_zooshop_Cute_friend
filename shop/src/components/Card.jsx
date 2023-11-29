export default function Card(){
    return(
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
    )
}
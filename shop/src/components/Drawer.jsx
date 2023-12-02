export default function Drawer(props){
    return(
        <div className="overlay">
            <div className="drawer" >
            <h2 className="d-flex justify-between mb-30">Корзина <img onClick={props.onClose} className="cu-p" src="./../images/cart/btn-remove.svg" alt="close"/></h2>
            

            <div className="Items">
            <div className="cart__item d-flex align-center mb-20">
                {/* <img className="mr-20" width={70} height ={100} src="./../images/items/dogs/korgi.avif" alt="korgipet"/> */}
                <div style={{backgroundImage: 'url(./../images/items/dogs/korgi.avif)'}} className="cart__itemImg"></div>

                <div className="mr-20">
                <p className="mb-5">Щенок "Корги"</p>
                <b>$ 599</b>
                </div>
                <img className="remove__btn" src="./../images/cart/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart__item d-flex align-center mb-20">
                {/* <img className="mr-20" width={70} height ={100} src="./../images/items/dogs/korgi.avif" alt="korgipet"/> */}
                <div style={{backgroundImage: 'url(./../images/items/dogs/korgi.avif)'}} className="cart__itemImg"></div>

                <div className="mr-20">
                <p className="mb-5">Щенок "Корги"</p>
                <b>$ 599</b>
                </div>
                <img className="remove__btn" src="./../images/cart/btn-remove.svg" alt="Remove"/>
            </div>
            </div>

            <div className="cartTotalBlock">
            <ul>
                <li> 
                <span>Итого:</span>
                <div></div>
                <b>$ 1198</b>
                </li>
                <li>
                <span>Комиссия 3%</span>
                <div></div>
                <b>$ 35,94</b>
                </li>
                <button className="greenButton">Оформить заказ<img src="./../images/cart/arrow.svg"/></button>
            </ul>
            </div>
            </div>
        </div>
        
    )
}